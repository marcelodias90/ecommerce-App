import { Injectable } from "@nestjs/common";
import { promises as fs } from 'fs'
import { RetornaUsuarioDto } from 'src/usuario/RetornaUsuarioDto';
import { nodemailerConfiguracao } from './nodemailer.config';


@Injectable()
export class MailService {

    async enviarMail(usuario: RetornaUsuarioDto, token: any): Promise<void> {
        const { nome, email } = usuario
        const dados = {
            body: await fs.readFile('./src/views/partials/formulario.handlebars', 'utf-8'),
            nomeUsuario: nome,
            Token: token.token,
        }
        const corpoEmail = await fs.readFile('./src/views/layouts/main.handlebars', 'utf-8');
        const dadosNodemailer = {
            corpoEmail,
            dados,
            email
        }
        nodemailerConfiguracao(dadosNodemailer)
    }
}