import { Injectable } from "@nestjs/common"

export interface IConverterStrings {
    converter(string: string): string
}
export const IConverterStrings = Symbol('IConverterStrings')
@Injectable()
export class ConverterStrings implements IConverterStrings {
    converter(string: string): string {
       return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    }
}