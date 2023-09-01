import * as dotenv from 'dotenv'
dotenv.config()
import * as nodemailer from 'nodemailer'
import { handlebars } from '../handlebars.config'


interface DadosConfiguracao {
    corpoEmail: any,
    dados: any,
    email: string
}

export async function nodemailerConfiguracao({ corpoEmail, dados, email }: DadosConfiguracao) {
    const transportr = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    const template = handlebars.compile(corpoEmail)
    const html = template(dados)
    const mensagem = {
        from: 'noreplay@ecommerce-app.com.br',
        to: email,
        subject: "Ativação cadastro site Ecommerce-APP",
        html: html,
    };

    transportr.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('O servidor está pronto para receber nossas mensagens');
        }
    });

    transportr.sendMail(mensagem, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}