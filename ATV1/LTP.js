export default class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
Mostrar(){
    console.log("Olá, meu nome é" + this.nome)
}
}