import { Body, Controller, Get, Post } from "@nestjs/common"
import { CreateUsuarioDto } from "./CreateUsuarioDto"
import { ResponseUsuarioDto } from "./ResponseUsuarioDto"
import { UsuarioService } from "./usuario.service"


@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Post('criar')
    async cria(@Body() usuarioDto: CreateUsuarioDto): Promise<ResponseUsuarioDto> {
        const usuario = await this.usuarioService.criar(usuarioDto)
        return usuario
    }

    @Get()
    async lista() :Promise<any> {
        const usuarios = await this.usuarioService.Listar()
        return usuarios
    }
}