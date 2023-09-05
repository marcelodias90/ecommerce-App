import { HttpException, HttpStatus } from "@nestjs/common";

export class RedeCartaoNaoPermitidaError extends HttpException {
  public readonly numeroCartao: string
  constructor(numeroCartao: string) {
    super(`Rede do cartão: ${numeroCartao} não é aceita.`, HttpStatus.BAD_REQUEST);
    this.name = "RedeCartaoNaoPermitidaError";
    this.numeroCartao = numeroCartao
  }
}