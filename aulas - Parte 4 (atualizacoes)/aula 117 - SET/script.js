//SET é muito parecida com MAP. O MAP é uma colecao de chave valor e nao pode ter chaves repetidas. SET nao trabalha com chave valor, somente com valor

let meuSet = new Set([1,2,3])

//map utiliza-se set para adicionar
meuSet.add(4)
meuSet.add(5)
meuSet.add(6)
meuSet.add(2) //Valores repetidos nao serao incluidos no SET

console.log("Tamanho: " + meuSet.size)
for(n of meuSet){
    console.log(n)
}