class Carro{ 
    //Static vai utilizar um endereco de memoria fixo, e todos os objetos da classe, quando tem um membro static, eles irao utilizar o mesmo endereco de memoria. Membros estaticos em Javascript fazem referencia ao objeto da classe(nome da classe)
    static alerta = true

    constructor(mc, md, c){
        this.marca=mc
        this.modelo = md
        this.cor=c
        this.ligado=false
        this.km=0
        this.combustivel=10     
    }
    info(){ //POdemos tornar os metodos como static
        console.log("Marca:...... " + this.marca)
        console.log("Modelo:..... " + this.modelo)
        console.log("Cor:........ " + this.cor)
        console.log("Ligado.....: " + (this.ligado ? "Sim" : "Nao"))
        console.log("Km.........: " + this.km)
        console.log("Combustivel: " + this.combustivel)
        console.log("Alerta:....: " + (Carro.alerta ? "Sim" : "Nao"))
        console.log("___________________________")
    }


    ligar(){
        this.ligado=true
    }

    desligar(){
        this.ligado=false
    }

    setAlerta(t){ //funcao utilizando o static alerta. 
        Carro.alerta=t
    }

    set altComb(v){
        if(v <0 || v >100){
            alert("Valor invalido")
        }else{
            this.combustivel=v
            console.log("Combustivel alterado, valor atual: "  + this.combustivel)
        }
        
    }


    get gComb(){
        return this.combustivel
    }

}

let c1 = new Carro("Honda", "HRV", "Prata")
let c2 = new Carro("VW", "Golf", "Branco")
let c3 = new Carro("GM", "Camaro", "Preto")
let c4 = new Carro("Ford", "Mustang", "Vermelho")


c1.altComb = 100

c1.setAlerta(true) //Alterando somente do c1, mas todos os outros tambem serao alterados
//Carro.alerta=false //Tambem pode ser utilizando a classe Carro e o atributo alerta = false, sem utilizar alguma funcao especifica

c1.info()
c2.info()
c3.info()
c4.info()


