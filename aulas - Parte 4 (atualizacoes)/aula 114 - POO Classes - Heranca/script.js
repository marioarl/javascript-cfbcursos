class Carro {
    constructor(tpCarro, tpComb){
        this.tipo = tpCarro //1 - Passeio, 2- Transporte, 3 - Combate
        this.qtdeComb = 100
        this.ligado = false
        this.tipoComb = tpComb // 1 - Gasolina   2 - Diesel    3- Etanol
    }

    info(){
        console.log("Qtde Combus: " + this.qtdeComb)
        console.log("Ligado.....: " + (this.ligado ? "Sim" : "Não"))
        console.log("Tipo Combus: " + this.tipoComb)
        if(this.tipo==1){
            console.log("Tipo Carro.: Passeio")
        }else if(this.tipo == 2){
            console.log("Tipo Carro.: Transporte")
        }else {
            console.log("Tipo Carro.: Combate")
        }
        
    }

    setLigado(t){
        this.ligado = t
    }

    get getLigado(){
        return this.ligado
    }
}

class CarroCombate extends Carro{ //CarroCombate está herdando de Carro
    constructor(potTiro){
        super(3,2) //Utilizando propriedade da classe base
        this.tiros = 1000
        this.potTiro = potTiro
        this.blindagem = 100
    }
    info(){
        super.info()
        console.log("Qtde Tiros.: " + this.tiros)
        console.log("Pot Tiros..: " + this.potTiro)
        console.log("Blindagem..: " + this.blindagem)
        console.log("_______________________________") 
    }
   
}

class CarroTransporte extends Carro{
    constructor(){
        super(2,2)
    }
}

let c1 = new CarroCombate(100)
let c2 = new CarroTransporte()

c1.ligado=true
c1.info()

c2.info()