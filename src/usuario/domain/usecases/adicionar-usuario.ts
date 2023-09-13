import { UsuarioModel } from "../entities/usuario"

export interface AdicionarUsuario {
    adicionar: (data: AdicionarUsuario.Parametros) => Promise<AdicionarUsuario.Resultado>
}

export namespace AdicionarUsuario {
    export type Parametros = Omit<UsuarioModel, 'id'>
    export type Resultado = {
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
    }
}