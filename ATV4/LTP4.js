export default class retangulo {
    constructor(base, altura){
    this.base=base
    this.altura= altura
    }
    calcularArea(){
        this.area = this.base * this.altura
    }
    exibir(){
        console.log(`área: ${this.area}`)
    }
}