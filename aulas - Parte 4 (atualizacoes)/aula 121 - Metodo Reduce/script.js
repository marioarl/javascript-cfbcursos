//Reduce é um metodo da classes ARRAy. Retorna um resultado, ou resumo da ARRAY, de determinada funcao aplicada aos elementos do ARRAY. 

let num = [0,1,2,3,4,5]
let soma = num.reduce((n1,n2)=> {
    console.log(n1 + ' + ' + n2)
    return n1+n2
})
console.log(soma)
console.log('------------')


let pessoa = [
    {nome:'Bruno', idade: 40},
    {nome:'Carlindo', idade: 30},
    {nome:'Fatsgrisa', idade: 25},
    {nome:'Glebsonaldo', idade: 18},
]

let nomes=pessoa.reduce((p1,p2)=>{
    p1.push(p2.nome)
    return p1
},[])
console.log(nomes)

let idades=pessoa.reduce((p1,p2)=>{
    p1.push(p2.idade)
    return p1
},[])
console.log(idades)