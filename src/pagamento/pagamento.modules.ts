import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pagamento } from "./pagamento.entity";
import { PagamentoController } from "./pagamento.controller";
import { PagamentoService } from "./pagamento.service";
import { IRedesCartoesCreditos, RedesCartoesCreditos } from "./cartao/RedesCartoesCredito";


@Module({
    imports: [TypeOrmModule.forFeature([Pagamento])],
    controllers: [PagamentoController],
    providers: [{ provide: IRedesCartoesCreditos, useClass: RedesCartoesCreditos },
        RedesCartoesCreditos, PagamentoService],
})
export class PagamentoModule { }