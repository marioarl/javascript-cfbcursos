const Carro={       //Criando um objeto literal
    marca:"VW",
    modelo: "Golf",
    info: function(){
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
    }
}

let c2=Object.create(Carro)
Carro.marca="Honda" //Trocando os valores das propriedades
Carro.modelo="HRV"

Carro["marca"] = "GM" //Ou tambem podemos trocar os valores dessa maneira
Carro["modelo"] = "Camaro"

Carro.info()

console.log("___________________________")
c2.info()

//console.log(Carro.marca)
//console.log(Carro.modelo)

console.log("___________________________")


const Veiculo={       
    marca:"Nissan",
    modelo: "Kicks",
    info: function(){
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
    }
}

const Caracteristicas={
    cor: "Cinza",
    cambio: "Automatico"
}

//Deletar a propriedade cor
//delete Caracteristicas.cor 

//Mesclar 2 objetos
const Carro2 = Object.assign(Veiculo,Caracteristicas)

console.log(Carro2)

Carro2.info()

console.log("___________________________")

//Desestruturacao: Quando podemos extrair dados de um determinado objeto
const Carro3={       
    marca:"Hyundai",
    modelo: "HB20",
    cor: "Preto",
    cambio: "Manual",
    info: function(){
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
    }
}
let {marca,modelo} = Carro3


console.log(Carro3)
console.log(marca)
console.log(modelo)
