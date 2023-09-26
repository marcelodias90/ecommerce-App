import { AdicionarUsuario } from "src/usuario/domain/usecases/adicionar-usuario"

export interface AdicionarUsuarioRepository {
    adicionar: (data: AdicionarUsuarioRepository.Parametros) => Promise<AdicionarUsuarioRepository.Resultado>
}

export namespace AdicionarUsuarioRepository {
    export type Parametros = AdicionarUsuario.Parametros
    export type Resultado = AdicionarUsuario.Resultado
}
