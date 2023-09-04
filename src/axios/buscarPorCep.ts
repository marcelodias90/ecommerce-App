import axios from 'axios'
import { CriarEnderecoDto } from 'src/endereco/CriarEnderecoDto';
import { RetonarEnderecoDto } from 'src/endereco/RetornaEnderecoDto';
import { BairroDivergenteError } from 'src/erros/BairroDivergenteError';
import { CepNaoExisteError } from 'src/erros/CepNaoExisteError';
import { LogradouroDivergenteError } from 'src/erros/LogradouroDivergenteError';
import { UfDivergenteError } from 'src/erros/UfDivergenteError';

export class BuscarPorCepService {
  async pesquisarCep(dadosEndereco: CriarEnderecoDto[], usuario_Id: number): Promise<RetonarEnderecoDto[]> {
    try {
      let enderecosRetornados: RetonarEnderecoDto[] = []
      for (const dados of dadosEndereco) {
        const enderecoEncontrado = await axios.get(
          `https://viacep.com.br/ws/${dados.cep}/json`
        );
        if (enderecoEncontrado.data.erro) {
          throw new CepNaoExisteError(dados.cep);
        }
        if (dados.logradouro?.length && dados.logradouro?.length !== enderecoEncontrado.data.logradouro) {
          throw new LogradouroDivergenteError(dados.logradouro)
        }
        if (dados.bairro?.length && dados.bairro?.length !== enderecoEncontrado.data.bairro) {
          throw new BairroDivergenteError(dados.bairro)
        }
        if (dados.uf?.length && dados.uf?.length !== enderecoEncontrado.data.uf) {
          throw new UfDivergenteError(dados.uf)
        }
        const endereco: RetonarEnderecoDto = {
          cep: dados.cep,
          principal: dados.principal,
          apelido: dados.apelido,
          logradouro: enderecoEncontrado.data.logradouro,
          complemento:dados.complemento? dados.complemento : enderecoEncontrado.data.complemento,
          bairro: enderecoEncontrado.data.bairro,
          localidade: enderecoEncontrado.data.localidade,
          uf: enderecoEncontrado.data.uf,
          ibge: enderecoEncontrado.data.ibge,
          gia: enderecoEncontrado.data.gia,
          ddd: enderecoEncontrado.data.ddd,
          siafi: enderecoEncontrado.data.siafi,
          usuario_id: usuario_Id
        }
        enderecosRetornados.push(endereco)
      }
      return enderecosRetornados
    } catch (erro) {
      if (erro instanceof CepNaoExisteError) {
        console.log(erro);
        throw new CepNaoExisteError(erro.cep);
      }
      if (erro instanceof LogradouroDivergenteError) {
        console.log(erro);
        throw new LogradouroDivergenteError(erro.logradouro);
      }
      if (erro instanceof BairroDivergenteError) {
        console.log(erro);
        throw new BairroDivergenteError(erro.bairro);
      }
      if (erro instanceof UfDivergenteError) {
        console.log(erro);
        throw new UfDivergenteError(erro.uf);
      }
    }

  }
}