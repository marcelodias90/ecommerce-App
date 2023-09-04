import { HttpException, HttpStatus } from "@nestjs/common"

export class UfDivergenteError extends HttpException {
  public readonly uf: string
  constructor(uf: string) {
    super(`UF: ${uf} não pertence à esse cep ou está incompleto`, HttpStatus.BAD_REQUEST);
    this.name = "UfDivergenteError";
    this.uf = uf
  }
}