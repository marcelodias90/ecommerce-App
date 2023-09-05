import {validate} from 'luhn'
import { CartaoInvalidoError } from 'src/erros/CartaoInvalidoError'
import { CriarPagamentoDto } from './CriarPagamentoDto'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Pagamento } from './pagamento.entity'
import { Repository } from 'typeorm'
import { RetornaPagamentoDto } from './RetornaPagamentoDto'

@Injectable()
export class PagamentoService {

    constructor(
        @InjectRepository(Pagamento)
        private pagamentoRepository: Repository<Pagamento>,
    ) { }

    async pagamento(dadosPagamento: CriarPagamentoDto, usuario_Id: number): Promise<RetornaPagamentoDto> {
        const { numeroCartao } = dadosPagamento
        const cartaoValido = validate(numeroCartao.replace(/\D/g, ''))        
        if (!cartaoValido) {
            throw new CartaoInvalidoError(numeroCartao)
        }
        const pagamento: Pagamento = this.pagamentoRepository.create({
            numeroCartao: dadosPagamento.numeroCartao,
            dataDeValidade: dadosPagamento.dataDeValidade,
            codigoCV: dadosPagamento.codigoCV,
            usuario_id: usuario_Id
        })
        const pagamentoAdicionado = await this.pagamentoRepository.save(pagamento)
        const pagamentoDto: RetornaPagamentoDto = {
            id: pagamentoAdicionado.id,
            numeroCartao: pagamentoAdicionado.numeroCartao,
            dataDeValidade: pagamentoAdicionado.dataDeValidade,
            usuarioId: pagamentoAdicionado.usuario_id
        }
        return pagamentoDto

    }
}