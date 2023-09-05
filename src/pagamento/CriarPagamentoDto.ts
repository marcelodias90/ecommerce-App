import { IsNotEmpty } from "class-validator";

export class CriarPagamentoDto {

    @IsNotEmpty()
    numeroCartao: string;

    @IsNotEmpty()
    codigoCV: number;

    @IsNotEmpty()
    dataDeValidade: string;
  }