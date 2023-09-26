import { UsuarioRepository } from "src/usuario/infra/orm/repositories/usuario.repository";
import { BUSCAR_POR_EMAIL_FACTORY } from "../providers";
import { BdBuscarPorEmail } from "src/usuario/data/usecases/bd-buscar-por-email";
import { BuscarPorEmail } from "src/usuario/domain/usecases/buscar-por-email";

export const buscarPorEmailFactory = {
    provide: BUSCAR_POR_EMAIL_FACTORY,
    useFactory: (usuarioRepository: UsuarioRepository): BuscarPorEmail => {
        return new BdBuscarPorEmail(usuarioRepository)
    },
    inject: [UsuarioRepository]
}