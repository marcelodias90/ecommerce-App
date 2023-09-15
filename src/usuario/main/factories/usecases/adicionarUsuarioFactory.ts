import { UsuarioRepository } from "src/usuario/infra/orm/repositories/usuario.repository";
import { ADICIONAR_USUARIO_FACTORY } from "../providers";
import { AdicionarUsuario } from "src/usuario/domain/usecases/adicionar-usuario";
import { BdAdicionarUsuario } from "src/usuario/data/usecases/bd-adicionar-usuario";

export const adicionarUsuarioFactory = {
    provide: ADICIONAR_USUARIO_FACTORY,
    useFactory: (usuarioRepository: UsuarioRepository): AdicionarUsuario => {
        return new BdAdicionarUsuario(usuarioRepository)
    },
    inject: [UsuarioRepository]
}