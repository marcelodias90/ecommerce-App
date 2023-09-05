import { HttpException, HttpStatus } from "@nestjs/common";

export class CartaoInvalidoError extends HttpException {
  public readonly numeroCartao: string
  constructor(numeroCartao: string) {
    super(`Número cartão: ${numeroCartao} é inválido.`, HttpStatus.BAD_REQUEST);
    this.name = "CartaoInvalidoError";
    this.numeroCartao = numeroCartao
  }
}