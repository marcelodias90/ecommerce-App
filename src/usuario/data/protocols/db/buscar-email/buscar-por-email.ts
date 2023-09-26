import { BuscarEmail } from "src/usuario/domain/usecases/buscar-por-email"

export interface BuscarPorEmailRepository {
    buscarEmail :(data: BuscarPorEmailRepository.Parametros) => Promise<BuscarPorEmailRepository.Resultado>
}

export namespace BuscarPorEmailRepository {
    export type Parametros = BuscarEmail.Parametros
    export type Resultado = BuscarEmail.Resultado
}
