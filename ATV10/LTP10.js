export default class mensageiro{
    constructor(remetente){
        this.remetente=remetente
    }
    enviar(destinatario, mensagem){
        console.log(`${this.remetente} para ${destinatario}: ${mensagem}`)
    }
}