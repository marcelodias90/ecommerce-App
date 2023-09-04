import { IsArray, ValidateNested } from "class-validator";
import { CriarEnderecoDto } from "./CriarEnderecoDto";
import { Type } from "class-transformer";

export class CriarEnderecosDto {
    @IsArray()
    @ValidateNested() 
    @Type(() => CriarEnderecoDto) 
    enderecoDto : CriarEnderecoDto[]
}