import {Module} from "@nestjs/common"
import { ConstruirAdicionarUsuarioController } from "../../factories/controllers/adicionar-usuario.factory";
import { FactoryModule } from "../../factories/usecases/factory.module";
import { UsuarioController } from "./usuario.controller";

@Module({
    imports: [FactoryModule],
    controllers: [UsuarioController],
    providers: [ConstruirAdicionarUsuarioController]
})
export class UsuarioModule {}