import { Module } from "@nestjs/common";
import {TypeOrmModule } from '@nestjs/typeorm'
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule { }