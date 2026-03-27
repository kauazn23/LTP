export default class Operacoes{
    calcular(a, b, operacao){
        if(operacao === "soma"){
            console.log(`${a} + ${b} = ${a + b}`)
        }
        else if(operacao === "subtrair"){
            console.log(`${a} - ${b} = ${a - b}`)
        }
        else if(operacao === "multiplicar"){
            console.log(`${a} x ${b} = ${a * b}`)
        }
        else if(operacao === "dividir"){
            console.log(`${a} / ${b} = ${a / b}`)
        }
    }
}