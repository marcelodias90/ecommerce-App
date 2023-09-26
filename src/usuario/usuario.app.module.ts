import { Module } from "@nestjs/common";
import { UsuarioModule } from "./main/controllers/usuario/usuario.module"

@Module({
    imports: [UsuarioModule],
})
export class UsuarioAppModule { }