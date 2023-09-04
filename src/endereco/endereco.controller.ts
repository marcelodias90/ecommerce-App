import { Body, Controller, Param, Post } from "@nestjs/common";
import { EnderecoService } from "./endereco.service";
import { CriarEnderecosDto } from "./CriarEnderecosDto";

@Controller('endereco')
export class EnderecoController {

    constructor(
        private readonly enderecoService: EnderecoService
    ) { }
    @Post('adicionar/:usuario_id')
    async criar(@Param('usuario_id') usuario_Id: number, @Body() dadosEndereco: CriarEnderecosDto) {
       return await this.enderecoService.criar(dadosEndereco.enderecoDto, usuario_Id)
    }
}