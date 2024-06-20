"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tv_1 = __importDefault(require("./tv"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const tv = new tv_1.default("LG", 55, "LED", 13);
function controleRemoto() {
    let opcao = '';
    while (opcao !== '5') {
        console.log('===== Controle =====');
        console.log('1. Ligar a Tv');
        console.log('2. Mudar de canal');
        console.log('3. Aumentar volume');
        console.log('4. Diminuir volume');
        console.log('5. Desligar a Tv');
        opcao = prompt('Escolha o que deseja fazer: ');
        switch (opcao) {
            case '1':
                tv.ligarTv();
                break;
            case '2':
                const canal = parseInt(prompt("Digite o número do canal: "));
                tv.mudarCanal(canal);
                break;
            case '3':
                tv.aumentarVolume();
                break;
            case '4':
                tv.diminuirVolume();
                break;
            case '5':
                tv.desligarTv();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                break;
        }
    }
}
controleRemoto();
tv.exibir();
//# sourceMappingURL=main.js.map