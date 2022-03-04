let num = [5,2,8,15,30,4,25,18,9]
//Elementos maiores do que 10 do ARRAY

let novo=num.filter((el)=>{
    return el >=10
})


console.log(num)
console.log(novo)

console.log("________________________________")

let dados=[
    {id:15},
    {id:0},
    {id:-10},
    {id:null},
    {id:NaN},
    {id:undefined},
    {id:5.8},
    {},
    {id:2}
]

//Array somente com IDs validos

let validos = dados.filter((el)=>{
    if(typeof(el.id) == 'number' && !isNaN(el.id) && (el.id >= 0)){
        return true
    }else{
        return false
    }
})

console.log(dados)
console.log(validos) //Somente numeros, validos