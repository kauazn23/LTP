export default class Numero{
    constructor(valor){
        this.valor = valor
    }
    comparar(outroValor){
        if(this.valor > outroValor){
            console.log("maior")
        }
        else if(this.valor < outroValor){
            console.log("menor")
        }
        else if(this.valor == outroValor){
            console.log("igual")
        }
    }
}