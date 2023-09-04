import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Endereco } from "./endereco.entity";
import { EnderecoController } from "./endereco.controller";
import { EnderecoService } from "./endereco.service";
import { BuscarPorCepService } from "src/axios/buscarPorCep";
import { ConverterStrings, IConverterStrings } from "src/conversores/ConverterString";



@Module({
    imports: [TypeOrmModule.forFeature([Endereco])],
    controllers: [EnderecoController],
    providers: [{ provide: IConverterStrings, useClass: ConverterStrings }, EnderecoService, BuscarPorCepService, ConverterStrings],
})
export class EnderecoModule { }