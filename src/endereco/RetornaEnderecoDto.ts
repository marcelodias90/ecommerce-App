export class RetonarEnderecoDto{
    cep: string;
    principal: number;
    apelido: string
    logradouro: string;
    complemento?: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge?: number;
    gia?: number;
    ddd?: number;
    siafi?: number;
    usuario_id: number;
}