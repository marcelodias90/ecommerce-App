import { Controller } from "src/usuario/presentation/protocols/controller"
import { HttpResponse } from "src/usuario/presentation/protocols/http"

export const controllerAdpter = async (controller: Controller, requisicao?: any): Promise<HttpResponse> => {
    return controller.lidar(requisicao)
}
