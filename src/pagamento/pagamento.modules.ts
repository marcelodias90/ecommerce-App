import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pagamento } from "./pagamento.entity";
import { PagamentoController } from "./pagamento.controller";
import { PagamentoService } from "./pagamento.service";


@Module({
    imports: [TypeOrmModule.forFeature([Pagamento])],
    controllers: [PagamentoController],
    providers: [PagamentoService],
})
export class PagamentoModule { }