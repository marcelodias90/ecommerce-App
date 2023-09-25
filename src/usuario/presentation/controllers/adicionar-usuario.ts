import { AdicionarUsuario } from "src/usuario/domain/usecases/adicionar-usuario";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";
import { UsuarioModel } from "src/usuario/domain/entities/usuario";
import { createdSuccess, serverError } from "../helpers/http.helpers"

export class adicionarUsuarioController implements Controller {
    constructor(private readonly adicionarUsuario: AdicionarUsuario) { }
    async lidar(request: any): Promise<HttpResponse> {
    try {
            const usuario: UsuarioModel = {
                ...request
            }
            const novoUsuario = await this.adicionarUsuario.adicionar(usuario);
            return createdSuccess(novoUsuario)
        }catch(erro) {
            return serverError(erro)
        }
    }
}