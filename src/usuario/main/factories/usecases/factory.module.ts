import { Module } from "@nestjs/common";
import { adicionarUsuarioFactory } from "./adicionarUsuarioFactory";

@Module({
    providers: [
        adicionarUsuarioFactory
    ],
    exports: [
        adicionarUsuarioFactory
    ]
})
export class FactoryModule { }