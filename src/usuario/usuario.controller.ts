import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { CriarUsuarioDto } from "./CriarUsuarioDto"
import { RetornaUsuarioDto } from "./RetornaUsuarioDto"
import { UsuarioService } from "./usuario.service"


@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Post('criar')
    async cria(@Body() usuarioDto: CriarUsuarioDto): Promise<RetornaUsuarioDto> {
        return await this.usuarioService.criar(usuarioDto)
        
    }
    @Post('validar-email/:email')
    async validaEmail(@Param('email') email: string): Promise<void> {
        await this.usuarioService.validarEmail(email)
    }

    @Get()
    async lista(): Promise<RetornaUsuarioDto[]> {
        return await this.usuarioService.listar() 
    }
}