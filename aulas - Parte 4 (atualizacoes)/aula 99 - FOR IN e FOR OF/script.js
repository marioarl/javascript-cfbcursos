//FOR IN é um loop para percorrer os atributos de um objeto
//FOR OF é um loop para percorrer ARRAYS

const aluno = {nome: "Mario", sobrenome: "Lima"}
const notas = {n1: 80, n2:75, n3:92, n4:85}
const info = {...aluno, ...notas}


//FOR IN
for(let dado in aluno){
    console.log(aluno[dado])
    
}

console.log("______")

for(let dado in info){
    console.log(info[dado])
    
}
console.log("______")

//FOR OF

let notas1 = [100,80,75,30,64,47,98,81,60]
let aprovados = 0
let reprovados = 0

for(let n of notas1){
    console.log(n)

}
console.log("______")

for (var n of notas1){
    n >= 60 ? aprovados++ : reprovados++
}

console.log("Aprovados: " + aprovados)
console.log("Reprovados: " + reprovados)