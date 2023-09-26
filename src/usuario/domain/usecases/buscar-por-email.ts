export interface BuscarPorEmail {
    buscarEmail: (data: BuscarEmail.Parametros) => Promise<BuscarEmail.Resultado>
}

export namespace BuscarEmail {
    export type Parametros = {
         email: string 
    }
    export type Resultado = {
        email: string;
    }
}