export default class calculadora{
    constructor(num1, num2){
        this.num1=num1
        this.num2=num2

    }

    soma(num1, num2){
        return (this.num1 + this.num2)
    }
     subtrair(num1, num2){
        return (this.num1 - this.num2)
    }
     multiplicar(num1, num2){
        return (this.num1 * this.num2)
    }
     divisao(num1, num2){
        return (this.num1 / this.num2)
    }
}