export default class contador{
    constructor(valor){
        this.valor=0
    }

    incrementar(){
        this.valor=this.valor + 1
    }

    mostrar(){
        console.log(`Valor atual: ${this.valor}`)
    }
}