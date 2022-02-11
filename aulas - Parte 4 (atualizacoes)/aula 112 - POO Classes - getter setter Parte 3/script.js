//setters - sao metodos especiais que utilizamos para alterar valores dos atributos de nosso objeto

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

    //Criando um metodo set(setter) para o combustivel
    set altComb(v){
        if(v <0 || v >100){
            alert("Valor invalido")
        }else{
            this.combustivel=v
            console.log("Combustivel alterado, valor atual: "  + this.combustivel)
        }
        
    }

    //Getter
    get gComb(){
        return this.combustivel
    }

}

let c1 = new Carro("Honda", "HRV", "Prata")
let c2 = new Carro("VW", "Golf", "Branco")
let c3 = new Carro("GM", "Camaro", "Preto")
let c4 = new Carro("Ford", "Mustang", "Vermelho")

c1.cor="Preto"

//Alterando o combustivel c1
//c1.altComb(100)
c1.altComb = 100

//Getter
console.log(c1.gComb)

c1.ligar()
c4.ligar()

c1.info()
c2.info()
c3.info()
c4.info()