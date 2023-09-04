import { HttpException, HttpStatus } from "@nestjs/common"

export class BairroDivergenteError extends HttpException {
  public readonly bairro: string
  constructor(bairro: string) {
    super(`Bairro: ${bairro} não pertence à esse cep ou está incompleto.`, HttpStatus.BAD_REQUEST);
    this.name = "BairroDivergenteError";
    this.bairro = bairro
  }
}