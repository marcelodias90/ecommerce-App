import { Body, Controller, Param, Post } from "@nestjs/common";
import { PagamentoService } from "./pagamento.service";
import { CriarPagamentoDto } from "./CriarPagamentoDto";
import { RetornaPagamentoDto } from "./RetornaPagamentoDto";



@Controller('pagamento')
export class PagamentoController {

    constructor(
        private readonly pagamentoService: PagamentoService
    ) { }
    @Post('adicionar/:usuario_id')
    async criar(@Param('usuario_id') usuario_Id: number, @Body() dadosPagamento: CriarPagamentoDto): Promise<RetornaPagamentoDto> {
        return await this.pagamentoService.pagamento(dadosPagamento, usuario_Id)
    }
}