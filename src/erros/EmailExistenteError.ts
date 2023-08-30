import { HttpException, HttpStatus} from "@nestjs/common"

export class EmailExistenteError extends HttpException {
    constructor(email: string) {
      super(`Usuário ${email} já foi cadastrado, favor realizar o login`, HttpStatus.BAD_REQUEST);
      this.name = "EmailExistenteError";
    }
  }