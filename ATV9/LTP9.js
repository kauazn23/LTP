export default class ContaBancaria{
    constructor(titular, saldo){
        this.titular=titular
        this.saldo=0
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(valor){
        if(valor < this.saldo){
            this.saldo -= valor
        }
        else(console.log("saldo insuficiente"))
    }

}