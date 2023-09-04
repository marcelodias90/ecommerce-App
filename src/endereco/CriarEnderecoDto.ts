import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CriarEnderecoDto {
    @IsNotEmpty()
    @MaxLength(8, { message: 'O campo deve conter no máximo 8 caracteres' })
    @MinLength(8, { message: 'O campo deve conter no mínimo 8 caracteres' })
    cep: string;

    @IsNotEmpty()
    principal: number;

    @IsNotEmpty()
    apelido: string

    logradouro?: string

    complemento?: string

    bairro?: string

    localidade?: string

    uf?: string
}

