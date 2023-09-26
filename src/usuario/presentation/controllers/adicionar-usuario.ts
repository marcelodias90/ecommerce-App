import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";
import { UsuarioModel } from "src/usuario/domain/entities/usuario";
import { badRequest, createdSuccess, serverError } from "../helpers/http.helpers"
import { AdicionarUsuario } from "../../domain/usecases/adicionar-usuario";
import { BuscarPorEmail } from "src/usuario/domain/usecases/buscar-por-email";
import { EmailExistenteError } from "src/erros/EmailExistenteError";
import { STATUS } from "../../data/enums/usuarioStatus.enum"

export class AdicionarUsuarioController implements Controller {
    constructor(
        private readonly adicionarUsuario: AdicionarUsuario,
        private readonly buscarPorEmail: BuscarPorEmail,
    ) { }
    async lidar(parametros: AdicionarUsuarioController.Parametros): Promise<HttpResponse> {
        try {
            const { email } = parametros

            const emailExiste = await this.buscarPorEmail.buscarEmail({ email })
            if (emailExiste) return badRequest(new EmailExistenteError(email))

            const usuario = {
                ...parametros,
                status: STATUS.DESATIVADO
            } as UsuarioModel

            const novoUsuario = await this.adicionarUsuario.adicionar(usuario);
            return createdSuccess(novoUsuario)
        } catch (erro) {
            console.log(erro);
            return serverError(erro)
        }
    }
}

export namespace AdicionarUsuarioController {
    export type Parametros = {
        nome: string
        sobrenome: string
        email: string;
        cpf: string;
        senha: string;
        status: number;
    }
}