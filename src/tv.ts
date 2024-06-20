class Tv{
    marca: string;
    tamanho: number;
    tipo: string;
    status: boolean;
    volume: number;
    canal: number;



    constructor(marca: string, tamanho: number, tipo: string, canal:number ){
        this.marca = marca;
        this.tamanho = tamanho;
        this.tipo = tipo;
        this.status = false;
        this.volume = 20;
        this.canal = canal; 
    }

    ligarTv(): void{
        if (!this.status) {
            this.status = true;
            console.log("A TV está ligada!");
        } else {
            console.log("A TV já está desligada.");
        }
        console.log("\n");
    }

    desligarTv(): void{
        console.log("Você desligou a tv")
    }

    mudarCanal(canal: number){
        if (this.status) {
            this.canal = canal;
            console.log("|======================|");
            console.log("|                      |");
            console.log(`|   Canal: ${this.canal}          |`);
            console.log("|                      |");
            console.log("|                      |");
            console.log("|======================|");
        } else {
            console.log("A TV está desligada. Não é possível mudar de canal.");
        }
    }

    aumentarVolume(): void{
        if (this.status && this.volume < 100) {
            this.volume += 1;
            console.log(`Volume: ${this.volume}`);
        } else if (this.volume >= 100) {
            console.log("Volume máximo.");
        } else {
            console.log("A TV está desligada. Não é possível aumentar o volume.");
        }
    }

    diminuirVolume(): void{
        if (this.status && this.volume > 0) {
            this.volume -= 1;
            console.log(`Volume: ${this.volume}`);
        } else if (this.volume <= 0) {
            console.log("Volume no mínimo.");
        } else {
            console.log("A TV está desligada. Não é possível diminuir o volume.");
        }
    }
}
export default Tv;