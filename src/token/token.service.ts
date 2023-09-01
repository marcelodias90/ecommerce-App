import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenCadastro } from './token.cadastro.entity';
import { differenceInMinutes } from 'date-fns'
import { CriarTokenCadastroDto } from './criarTokenCadastroDto';

@Injectable()
export class TokenService {
    constructor(
        @InjectRepository(TokenCadastro)
        private tokenRepository: Repository<TokenCadastro>
    ) { }

    private Token = this.criarToken()
    async gerarToken(IdUsuario: number): Promise<TokenCadastro> {
        const tokenGerados = await this.tokenRepository.find({ where: { usuario_id: IdUsuario } })
        const existeToken = tokenGerados[tokenGerados.length - 1]
        if (existeToken) {
            const tokenExpirado = this.verificaToken(existeToken.created_at)
            return tokenExpirado === true ?
                this.cadastroToken(existeToken)
                : existeToken
        }

        const token: CriarTokenCadastroDto ={
            usuario_id: IdUsuario,
            created_at: new Date(),
            token: this.Token
        }
        const novoToken = this.tokenRepository.create(token)
        return await this.tokenRepository.save(novoToken);

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

    private verificaToken(dataToken: Date): boolean {
        const dataAtual = new Date()
        const diferancaHoras = differenceInMinutes(dataAtual, dataToken)
        return diferancaHoras > 60 ? true : false
    }
}