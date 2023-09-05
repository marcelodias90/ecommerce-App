import Luhn from 'luhn'
import { CartaoInvalidoError } from 'src/erros/CartaoInvalidoError'

export class PagamentoService {
        async pagamento(numeroCartao: string){
            const cartaoValido = Luhn.validate(numeroCartao)
            if(!cartaoValido){
                throw new CartaoInvalidoError(numeroCartao)
            }
        }
}