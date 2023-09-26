import { BuscarEmail, BuscarPorEmail } from "src/usuario/domain/usecases/buscar-por-email";
import { BuscarPorEmailRepository } from "../protocols/db/buscar-email/buscar-por-email";

export class BdBuscarPorEmail implements BuscarPorEmail{

    constructor(private readonly buscarPorEmail: BuscarPorEmailRepository){}
     async buscarEmail(data: BuscarEmail.Parametros):  Promise<BuscarEmail.Resultado> {
         return await this.buscarPorEmail.buscarEmail(data)
    }
}