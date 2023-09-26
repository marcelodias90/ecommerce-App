import { Body, Controller, Get, Param, Post , Res} from "@nestjs/common"
import { CriarUsuarioDto } from "../../../CriarUsuarioDto"
import { HttpResponse } from "src/usuario/presentation/protocols/http"
import { ConstruirAdicionarUsuarioController } from "../../factories/controllers/adicionar-usuario.factory"
import { controllerAdpter } from "../../adpters/controller.adapter"

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly construirAdicionarUsuarioController: ConstruirAdicionarUsuarioController,
    ) { }

    @Post('adiciona')
    async cria(@Body() body: CriarUsuarioDto,  @Res() res: any,): Promise<HttpResponse> {        
        const resultado = await controllerAdpter(this.construirAdicionarUsuarioController.fabricar(), body)
        return res.status(resultado.statusCode).json(resultado)
    }
    // @Post('validar-email/:email')
    // async validaEmail(@Param('email') email: string): Promise<void> {
    //     await this.usuarioService.validarEmail(email)
    // }

    // @Get()
    // async lista(): Promise<RetornaUsuarioDto[]> {
    //     return await this.usuarioService.listar()
    // }
}