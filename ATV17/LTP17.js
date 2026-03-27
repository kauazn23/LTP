export default class Investimento {
  constructor(capital, taxa){
    this.capital = capital
    this.taxa = taxa
  }

  calcularJuros(anos){
    return `Juros em ${anos} anos: ${this.capital * this.taxa * anos}`
  }
}