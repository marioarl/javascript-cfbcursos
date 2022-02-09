
let produtos = new Map([
    ["01", "Cadeira"], 
    ["02", "Mesa"],
    ["03", "Computador"],
    ["04", "Impressora"]
])
produtos.set("05", "Memoria")

console.log("Tamanho: " + produtos.size)
for(p of produtos)
    console.log(p)
console.log("_________________________")

//Apagar apenas um item do MAP
console.log("Apagar apenas um item do MAP produtos.delete('numero da chave')")
produtos.delete("03")
console.log("Tamanho: " + produtos.size)
for(p of produtos)
    console.log(p)
console.log("_________________________")


//Limpar todo o conteudo do MAP
console.log("Limpar o conteudo do MAP produtos.clear()")
produtos.clear()

console.log("Tamanho: " + produtos.size)
for(p of produtos)
    console.log(p)
console.log("_________________________")


//Inserindo um ARRAY dentro do MAP
console.log("Inserindo um ARRAY dentro do MAP")
let produtosP = new Map([
    ["01", ["Mouse", "R$10,75"]], 
    ["02", ["Teclado", "R$35,90"]],
    ["03", ["Monitor", "R$420,50"]],
    ["04", ["Impressora", "R$150,00"]]
    ])

console.log("Tamanho: " + produtosP.size)
for(p of produtosP)
    console.log(p)
console.log("_________________________")

//Imprimindo a posicao 0 do Array
console.log("Imprimindo a posicao 0 do Array")
for(p of produtosP)
    console.log(p[1][0])
console.log("_________________________")

//Imprimindo a posicao 1 do Array
console.log("Imprimindo a posicao 1 do Array")
for(p of produtosP)
    console.log(p[1][1])
console.log("_________________________")


//Metodo forEach permite executar uma funcao de call-back para cada um dos elementos do MAP
let produtos3 = new Map([
    ["01", "Mouse"], 
    ["02", "Teclado"],
    ["03", "Monitor"],
    ["04", "Gabinete"]
])

//Utilizando o metodo forEach
console.log("Utilizando o metodo forEach")
function info(chave, valor){
    console.log("Chave: " + chave + " - Valor: " + valor)
}

produtos3.forEach(info)//Parametro ==> Qual funcao executar
console.log("_________________________")

//Metodo keys retornar um objeto (do tipo iterator) que vai imprimir todas as chaves do MAP
console.log("Metodo keys()")
let itk = produtos3.keys()
console.log(itk.next().value)
console.log(itk.next().value)
console.log(itk.next().value)
console.log(itk.next().value)

console.log("_________________________")

//Metodo value retornar um objeto (do tipo iterator) que vai imprimir todas os valores do MAP
console.log("Metodo values()")
let itv = produtos3.values()
console.log(itv.next().value)
console.log(itv.next().value)
console.log(itv.next().value)
console.log(itv.next().value)

console.log("_________________________")
//Metodo has verifica se temos um elemento na lista, true ou false
console.log("Metodo res()")
console.log(produtos3.has("07") ? "Produto encontrado" : "Nao esta na lista")