export default class Aluno {
  constructor(nome){
    this.nome = nome
  }

  calcularMedia(n1, n2, n3){
    return `Média: ${(n1 + n2 + n3) / 3}`
  }
}