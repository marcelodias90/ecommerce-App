import { AdicionarUsuario } from "src/usuario/domain/usecases/adicionar-usuario";
import { AdicionarUsuarioRepository } from "../protocols/db/adicionar-usuario/adicionar-usuario";

export class BdAdicionarUsuario implements AdicionarUsuario {
    constructor(private readonly adicionarUsuarioRepository: AdicionarUsuarioRepository) { }

    async adicionar(data: AdicionarUsuario.Parametros): Promise<AdicionarUsuario.Resultado> {
        return this.adicionarUsuarioRepository.adicionar(data)
    }
}