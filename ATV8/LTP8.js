export default class saudacao{
    constructor(nome, hora){
        this.nome=nome
        this.hora=hora
    }
    
    saudar(){
        if(this.hora < 12){
            return `Bom dia ${this.nome}!`
        }
        else if(this.hora < 18){
            return `Boa tarde ${this.nome}!`
        }
        else(this.hora > 18)
            return `Boa noite ${this.nome}!`
        
    }
}