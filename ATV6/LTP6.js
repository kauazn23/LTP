export default class produto{
    constructor(nome, preco){
        this.nome=nome
        this.preco=preco
    }
    estaCaro(){
        return this.preco > 100
        }
    }