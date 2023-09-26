import { Module } from "@nestjs/common";
import { adicionarUsuarioFactory } from "./adicionarUsuarioFactory";
import { usuarioProvider } from "src/usuario/infra/orm/providers/usuario.provider";
import { UsuarioRepository } from "src/usuario/infra/orm/repositories/usuario.repository";

@Module({
    providers: [
        //providers
        usuarioProvider,

        //factories
        adicionarUsuarioFactory,

        //Repository
        UsuarioRepository
    ],
    exports: [
        //factories
        adicionarUsuarioFactory
    ]
})
export class FactoryModule { }