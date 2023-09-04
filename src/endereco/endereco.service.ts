import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Endereco } from "./endereco.entity";
import { Repository } from "typeorm";
import { BuscarPorCepService } from "src/axios/buscarPorCep";
import { CriarEnderecoDto } from "./CriarEnderecoDto";
import { RetonarEnderecoDto } from "./RetornaEnderecoDto";

enum PRINCIPAL {
    SELECIONADO = 1,
    NAOSELECIONADO = 0
}

@Injectable()
export class EnderecoService {
    constructor(
        @InjectRepository(Endereco)
        private enderecoRepository: Repository<Endereco>,
        private readonly buscarPorCepService: BuscarPorCepService
    ) { }
    async criar(dadosEndereco: CriarEnderecoDto[], usuario_Id: number): Promise<RetonarEnderecoDto[]> {
        let enderecosCadastrados: RetonarEnderecoDto[] = []
        const enderecos = await this.buscarPorCepService.pesquisarCep(dadosEndereco, usuario_Id)
        const principaisSelecionados = enderecos.filter(endereco => endereco.principal === PRINCIPAL.SELECIONADO)
        principaisSelecionados.length ?
            enderecos.map(endereco => {
                if (endereco === principaisSelecionados[0]) {
                    return endereco
                }
                endereco.principal = PRINCIPAL.NAOSELECIONADO
            }) : enderecos[0].principal = PRINCIPAL.SELECIONADO
        for (const endereco of enderecos) {
            enderecosCadastrados.push(await this.enderecoRepository.save(endereco))
        }
        return enderecosCadastrados
    }
}