import { Inject } from "@nestjs/common";
import { AdicionarUsuario } from "src/usuario/domain/usecases/adicionar-usuario";
import { adicionarUsuarioController } from "src/usuario/presentation/controllers/adicionar-usuario";
import { Controller } from "src/usuario/presentation/protocols/controller";
import { ADICIONAR_USUARIO_FACTORY } from "../providers";


export class ConstruirAdicionarUsuarioController {

    constructor (@Inject(ADICIONAR_USUARIO_FACTORY) private readonly adicionarUsuario: AdicionarUsuario ){}

    public fabricar(): Controller {
        const controller = new adicionarUsuarioController(this.adicionarUsuario)
        return controller
    }
}