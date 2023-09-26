import { Module } from "@nestjs/common";
import { adicionarUsuarioFactory } from "./adicionarUsuarioFactory";
import { usuarioProvider } from "src/usuario/infra/orm/providers/usuario.provider";
import { UsuarioRepository } from "src/usuario/infra/orm/repositories/usuario.repository";
import { buscarPorEmailFactory } from "./buscarPorEmailFactory";

@Module({
    providers: [
        //providers
        usuarioProvider,

        //factories
        adicionarUsuarioFactory,
        buscarPorEmailFactory,

        //Repository
        UsuarioRepository
    ],
    exports: [
        //factories
        adicionarUsuarioFactory,
        buscarPorEmailFactory,
    ]
})
export class FactoryModule { }