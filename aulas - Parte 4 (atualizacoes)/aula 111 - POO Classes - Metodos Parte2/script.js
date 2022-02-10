
class Carro{ 
    constructor(mc, md, c){
        this.marca=mc
        this.modelo = md
        this.cor=c
        this.ligado=false
        this.km=0
        this.combustivel=10     
    }
    info(){
        console.log("Marca:...... " + this.marca)
        console.log("Modelo:..... " + this.modelo)
        console.log("Cor:........ " + this.cor)
        console.log("Ligado.....: " + (this.ligado ? "Sim" : "Nao"))
        console.log("Km.........: " + this.km)
        console.log("Combustivel: " + this.combustivel)
        console.log("___________________________")
    }

    ligar(){
        this.ligado=true
    }

    desligar(){
        this.ligado=false
    }

}

let c1 = new Carro("Honda", "HRV", "Prata")
let c2 = new Carro("VW", "Golf", "Branco")
let c3 = new Carro("GM", "Camaro", "Preto")
let c4 = new Carro("Ford", "Mustang", "Vermelho")

//Mudando a propriedade de um carro
c1.cor="Preto"

c1.ligar()
c4.ligar()
//Chamando o metodo info
c1.info()
c2.info()
c3.info()
c4.info()

