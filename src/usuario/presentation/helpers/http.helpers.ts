import { HttpResponse } from "../protocols/http"
import { ServerError } from "./erros/server-erro"


export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error.message,
    name: error?.name,
  })
  
  export const forbidden = (error: Error): HttpResponse => ({
    statusCode: 403,
    body: error.message,
  })
  
  export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(error.stack),
  })
  
  export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data,
  })
  
  export const createdSuccess = (data: any): HttpResponse => ({
    statusCode: 201,
    body: data,
  })
  
  export const noContent = (): HttpResponse => ({
    statusCode: 204,
    body: null,
  })
  
  export const filesTooLarge = (): HttpResponse => ({
    statusCode: 413,
    body: 'Tamanho total de arquivos é muito grande',
  })
  
  export const partialSuccess = (body: any): HttpResponse => ({
    statusCode: 207,
    body,
  })