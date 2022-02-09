//A MAP é uma colecao de PAR simples padrao, chave valor(key value). Tanto as chaves quanto os valores da colecao odem ser de qualquer tipo

let produtos = new Map()

produtos.set("01", "Mouse") //Pode-se fazer a definicao com o set encadeado, sem utilizar o produtos.set nas proximas linhas
.set("02", "Teclado") 
.set("03", "Monitor")
.set("04", "Gabinete")
.set("01", "Memoria") // Se colocar o set em uma chave que já existe, esta ultima será colocada no lugar da definida anteriormente


//Tamanho do Map
console.log("Tamanho do MAP")
console.log(produtos.size, "Elementos")
console.log("_________________________")

//Obter determinado elemento dentro do MAP
console.log("Obter determinado elemento dentro do MAP")
console.log(produtos.get("03")) //Indicando a chave
console.log(produtos.get("01"))
console.log(produtos.get("02"))
console.log(produtos.get("05")) //Se indicar uma chave que nao existe retornará undefined
console.log("_________________________")

//Inicializar o MAP com valores
let produtos2 = new Map([
    ["01", "Cadeira"], 
    ["02", "Mesa"],
    ["03", "Computador"],
    ["04", "Impressora"]
])
console.log("Inicializando o MAP com valores Map([ [] ])")
console.log(produtos2.get("01"))
console.log(produtos2.get("02"))
console.log(produtos2.get("03"))
console.log(produtos2.get("04"))
console.log("_________________________")

//Listar os elementos com FOR
console.log("Listar os elemento com FOR")
for(p of produtos2)
    console.log(p)
console.log("_________________________")

//Listar somente as chaves do MAP produtos2
console.log("Listar somente as chaves do MAP produtos2")
for(p of produtos2)
    console.log(p[0])
console.log("_________________________")

//Listar somente os valores do MAP produtos2
console.log("Listar somente os valores do MAP produtos2")
for(p of produtos2)
    console.log(p[1])
console.log("_________________________")