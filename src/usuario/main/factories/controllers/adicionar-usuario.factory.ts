import { Inject, Injectable } from "@nestjs/common";
import { AdicionarUsuario } from "../../../domain/usecases/adicionar-usuario";
import { AdicionarUsuarioController } from "../../../presentation/controllers/adicionar-usuario";
import { Controller } from "src/usuario/presentation/protocols/controller";
import { ADICIONAR_USUARIO_FACTORY, BUSCAR_POR_EMAIL_FACTORY } from "../providers";
import { LogControllerDecoratorFactory } from "./log-controller-decorator.factory";
import { BuscarPorEmail } from "src/usuario/domain/usecases/buscar-por-email";

@Injectable()
export class ConstruirAdicionarUsuarioController {
    constructor(
        @Inject(ADICIONAR_USUARIO_FACTORY) private readonly adicionarUsuario: AdicionarUsuario,
        @Inject(BUSCAR_POR_EMAIL_FACTORY) private readonly buscarPorEmail: BuscarPorEmail
        ) { }

    public fabricar(): Controller {
        const controller = new AdicionarUsuarioController(this.adicionarUsuario, this.buscarPorEmail)
        return new LogControllerDecoratorFactory(controller)
    }
}