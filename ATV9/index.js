import ContaBancaria from "./LTP9.js";

const ContaBancaria1 = new ContaBancaria("Joao", 0)

ContaBancaria1.depositar(500)

ContaBancaria1.sacar(200)

console.log("Saldo:", ContaBancaria1.saldo)