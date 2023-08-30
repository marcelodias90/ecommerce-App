import { HttpException, HttpStatus} from "@nestjs/common"

export class EmailInexistenteError extends HttpException {
    constructor(email: string) {
      super(`Usuário não existe um cadastro com esse e-mail: ${email}.`, HttpStatus.BAD_REQUEST);
      this.name = "EmailInexistenteError";
    }
  }