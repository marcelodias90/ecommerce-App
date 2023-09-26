import { Controller } from "src/usuario/presentation/protocols/controller"
import { HttpResponse } from "src/usuario/presentation/protocols/http"


export class LogControllerDecoratorFactory {
    constructor(private readonly controller: Controller) { }

    async lidar(requisicao: any): Promise<HttpResponse> {
        return this.controller.lidar(requisicao)
    }
}