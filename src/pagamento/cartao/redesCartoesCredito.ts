import { Injectable } from "@nestjs/common";

export abstract class IRedesCartoesCreditos {
    abstract verificarRedeCartao(numeroCartao: string): boolean
}

@Injectable()
export class RedesCartoesCreditos implements IRedesCartoesCreditos {
    verificarRedeCartao(numeroCartao: string): boolean {
        var aceita = false;
        Object.keys(this.redesCarteosAceitas).forEach(function (key) {
            var regex = this.redesCarteosAceitas[key];
            if (regex.test(numeroCartao)) {
                aceita = true;
            }
        });
        return aceita;
    }
    private readonly redesCarteosAceitas = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
    };
}