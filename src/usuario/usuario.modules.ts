import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsuarioController } from "./main/controllers/usuario/usuario.controller";
import { UsuarioService } from "./infra/orm/repositories/usuario.service";
import { Usuario } from "./infra/orm/entities/usuario.entity";
import { TokenCadastro } from "src/token/token.cadastro.entity";
import { TokenService } from "src/token/token.service";
import { MailService } from "src/nodemailer/mail";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario, TokenCadastro])],
    controllers: [UsuarioController],
    providers: [UsuarioService, TokenService, MailService],
})
export class UsuarioModule { }