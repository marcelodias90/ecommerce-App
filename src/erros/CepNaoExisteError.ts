import { HttpException, HttpStatus } from "@nestjs/common";

export class CepNaoExisteError extends HttpException {
  public readonly cep: string
  constructor(cep: string) {
    super(`Usuário cep: ${cep} não existe ou está incorreto.`, HttpStatus.BAD_REQUEST);
    this.name = "CepNaoExisteError";
    this.cep = cep
  }
}