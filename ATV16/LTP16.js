export default class Temperatura {
  constructor(celsius){
    this.celsius = celsius
  }

  converterParaFahrenheit(){
    return `${(this.celsius * 9/5) + 32}°F`
  }

  converterParaKelvin(){
    return `${this.celsius + 273}K`
  }
}