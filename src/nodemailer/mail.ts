import * as dotenv from 'dotenv'
dotenv.config()
import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer'


@Injectable()
export class MailService {

    async enviarMail(email: string, token: number): Promise<void> {
        const transportr = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const mensagem = {
            from: 'noreplay@ecommerce-app.com.br',
            to: email, 
            subject: "Hello ✔", 
            text: "Hello world?", 
            html: "<b>Hello world? </b>", 
        };

        transportr.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log('Server is ready to take our messages');
            }
        });

        transportr.sendMail(mensagem, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    }
}