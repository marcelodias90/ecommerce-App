import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenCadastro } from './token.cadastro.entity';

@Injectable()
export class TokenService {
    constructor(
        @InjectRepository(TokenCadastro)
        private tokenRepository: Repository<TokenCadastro>
    ) { }


    private Token = this.criarToken()
    async gerarToken(IdUsuario: number): Promise<any> {
        const existeToken = await this.tokenRepository.findOne({ where: { usuario_id: IdUsuario } })
        if (existeToken) {
            const tokenExpirado = this.checkToken(existeToken.created_at)
            return tokenExpirado === false ?
                this.cadastroToken(existeToken)
                : existeToken
        }

        const novoToken = this.tokenRepository.create({
            usuario_id: IdUsuario,
            created_at: new Date().toISOString(),
            token: this.Token
        })

        await this.tokenRepository.save(novoToken);
        return novoToken;
    }

    private criarToken() {
        const min = 100000
        const max = 999999
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private async cadastroToken(tokenCadastro: TokenCadastro): Promise<any> {
        const novoToken = await this.tokenRepository.update(tokenCadastro.id,
            { token: this.Token, created_at: new Date() }
        )       
        return this.Token
    }
    private checkToken(dataToken: Date): boolean {
        const dataAtual = new Date()
        const milissegundos = dataAtual.getTime() - dataToken.getTime()
        const diferençaEntredatas = Math.floor(milissegundos / (1000 * 60))
        return diferençaEntredatas > 60 ? true : false
    }
}