import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "./usuario.entity";
import { Repository } from "typeorm";
import { CriarUsuarioDto } from "./CriarUsuarioDto";
import { RetornaUsuarioDto } from "./RetornaUsuarioDto";
import { EmailExistenteError } from "src/erros/EmailExistenteError";
import { TokenService } from "src/token/token.service";
import { MailService } from "src/nodemailer/mail";


enum STATUS {
    ATIVADO = 1,
    DESATIVADO = 0
}

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private readonly tokenService: TokenService,
        private readonly mailService: MailService
    ) { }


    async listar(): Promise<RetornaUsuarioDto[]> {
        const usuariosDtos: RetornaUsuarioDto[] = []
        const usuarios = await this.usuarioRepository.find()
        for (const usuarioAtual of usuarios) {
            usuariosDtos.push(this.converteUsuarioParaDto(usuarioAtual))
        }
        return usuariosDtos
    }

    async criar(usuarioDto: CriarUsuarioDto): Promise<RetornaUsuarioDto> {
        const { email } = usuarioDto
        const existeEmail = await this.usuarioRepository.findOne({
            where: { email }
        })
        if (existeEmail) {
            throw new EmailExistenteError(existeEmail.email)
        }
        const usuario = this.usuarioRepository.create(usuarioDto);
        usuario.status = STATUS.DESATIVADO
        return this.converteUsuarioParaDto(await this.usuarioRepository.save(usuario))
    }

    async validarEmail(email: string): Promise<void> {
        const usuarioExiste: RetornaUsuarioDto = await this.usuarioRepository.findOne({
            where: {
                email,
                status: STATUS.DESATIVADO
            }
        })
        if (usuarioExiste) {
            const token = await this.tokenService.gerarToken(usuarioExiste.id);
            usuarioExiste.status = STATUS.ATIVADO
            await this.usuarioRepository.save(usuarioExiste);
            await this.mailService.enviarMail(usuarioExiste, token)
        }
    }

    private converteUsuarioParaDto(usuario: Usuario): RetornaUsuarioDto {
        const responseUsuarioDto: RetornaUsuarioDto = {
            id: usuario.id,
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            email: usuario.email,
            cpf: usuario.cpf,
            status: usuario.status
        }
        return responseUsuarioDto
    }
}