import { HttpException, HttpStatus} from "@nestjs/common"

export class LogradouroDivergenteError extends HttpException {
  public readonly logradouro: string
    constructor(logradouro: string) {
      super(`Logradouro: ${logradouro} não pertence à esse cep ou está incompleto`, HttpStatus.BAD_REQUEST);
      this.name = "LogradouroDivergenteError";
      this.logradouro = logradouro
    }
  }