import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { CriarUsuarioDto } from "./CriarUsuarioDto"
import { RetornaUsuarioDto } from "./RetornaUsuarioDto"
import { UsuarioService } from "./usuario.service"


@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Post('criar')
    async cria(@Body() usuarioDto: CriarUsuarioDto): Promise<RetornaUsuarioDto> {
        const usuario = await this.usuarioService.criar(usuarioDto)
        return usuario
    }
    @Post('validar-email/:email')
    async validaEmail(@Param('email') email: string): Promise<any> {
        const emailToken = await this.usuarioService.validarEmail(email)
        return emailToken
    }

    @Get()
    async lista(): Promise<any> {
        const usuarios = await this.usuarioService.listar()
        return usuarios
    }
}