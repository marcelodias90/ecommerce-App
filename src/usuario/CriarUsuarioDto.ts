import { IsEmail, IsNotEmpty} from 'class-validator'

export class CriarUsuarioDto {

    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    sobrenome: string

    @IsEmail({}, {message: 'Por favor insira um e-mail válido'})
    email: string;

    @IsNotEmpty()
    cpf: string;
  
    @IsNotEmpty()
    senha: string;

    @IsNotEmpty()
    status: number;
  }