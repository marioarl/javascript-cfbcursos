let num = [5,1,4,2,3]
let it=num[Symbol.iterator]()
let v = it.next().value
let tam=num.length

console.log("Utilizando o iterator de uma forma interna, nao vimos que o iterator foi utilizado")
for(n of num) 
    console.log(n)

console.log("---------------------------------------------------------------------------------")
console.log("Utilizando o iterator com a variavel it")
console.log("Vai retornar o 1o. elemento da lista")
console.log(it.next().value)

console.log("---------------------------------------------------------------------------------")
console.log("Vai retornar o 2o. elemento da lista")
console.log(it.next().value)

console.log("---------------------------------------------------------------------------------")
console.log("Vai retornar o 3o. elemento da lista")
console.log(it.next().value)

console.log("---------------------------------------------------------------------------------")
console.log("Vai retornar o 4o. elemento da lista")
console.log(it.next().value)

console.log("---------------------------------------------------------------------------------")
console.log("Vai retornar o 5o. elemento da lista")
console.log(it.next().value)

console.log("---------------------------------------------------------------------------------")
console.log("Quando acabar os itens da lista, retorna undefined")
console.log(it.next().value)

console.log("---------------------------------------------------------------------------------")
console.log("Imprimindo o tamanho da lista")
console.log(tam + " itens")

console.log("---------------------------------------------------------------------------------")
console.log("Utilizando uma instrucao para operar os valores da lista")
for(let i = 0; i< num.length; i++){
    let v=it.next().value
    if (v % 2 > 0){
        console.log("Impar")
    }else{
        console.log("Par")
    }
}


