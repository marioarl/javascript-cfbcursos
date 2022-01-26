const jogador = [nome="Bruno", pontos=1000, vidas=7]
console.log(jogador)
console.log(...jogador)

const notas = [100,200,300]
function soma (n1,n2,n3){
    return n1+n2+n3
}
console.log(notas)
console.log(...notas) //os 3 pontos significam que está espandindo(OPERADOR SPREAD) a const notas

console.log(soma(notas[0],notas[1], notas[2])) //Somando os valores que estao na const notas = 600
console.log(soma(...notas)) //A mesma soma utilizando o porador SPREAD
