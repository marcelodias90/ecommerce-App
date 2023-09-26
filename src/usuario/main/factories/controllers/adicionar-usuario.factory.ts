import { Inject, Injectable } from "@nestjs/common";
import { AdicionarUsuario } from "../../../domain/usecases/adicionar-usuario";
import { AdicionarUsuarioController } from "../../../presentation/controllers/adicionar-usuario";
import { Controller } from "src/usuario/presentation/protocols/controller";
import { ADICIONAR_USUARIO_FACTORY } from "../providers";
import { LogControllerDecoratorFactory } from "./log-controller-decorator.factory";

@Injectable()
export class ConstruirAdicionarUsuarioController {
    constructor(@Inject(ADICIONAR_USUARIO_FACTORY) private readonly adicionarUsuario: AdicionarUsuario) { }

    public fabricar(): Controller {
        const controller = new AdicionarUsuarioController(this.adicionarUsuario)
        return new LogControllerDecoratorFactory(controller)
    }
}