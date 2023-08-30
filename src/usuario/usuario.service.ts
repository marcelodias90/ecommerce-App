import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "./usuario.entity";
import { Repository } from "typeorm";
import { CreateUsuarioDto } from "./CreateUsuarioDto";
import { ResponseUsuarioDto } from "./ResponseUsuarioDto";
import { EmailExistenteError } from "src/erros/EmailExistenteError";
import { EmailInexistenteError } from "src/erros/EmailInexistenteError";
import  auth from "../token/auth"
import { sign } from "jsonwebtoken"

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { }

    async Listar(): Promise<Usuario[]> {
        return await this.usuarioRepository.find()
    }

    async criar(usuarioDto: CreateUsuarioDto): Promise<ResponseUsuarioDto> {
        const { email } = usuarioDto
        const existeEmail = await this.usuarioRepository.findOne({
            where: { email }
        })
        if (existeEmail) {
            throw new EmailExistenteError(existeEmail.email)
        }
        const usuario = this.usuarioRepository.create(usuarioDto);
        const novoUsuario = await this.usuarioRepository.save(usuario);
        const responseUsuarioDto: ResponseUsuarioDto = {
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            sobrenome: novoUsuario.sobrenome,
            email: novoUsuario.email,
            cpf: novoUsuario.cpf
        }
        return responseUsuarioDto
    }

    async validarEmail(email: string): Promise<any> {
        const chekcEmail = await this.usuarioRepository.findOne({
            where: {
                email
            }
        })
        if(!chekcEmail) {
            throw new EmailInexistenteError(email)
        }
        const token = sign({}, auth.jwt.secret, {
            expiresIn: auth.jwt.expiresIn
          });

        return {
            email,
            token
        }
    }   

}