


/*
Se fizermos uma funcao para somar 2 numeros, temos:

function soma(n1,n2){
    let res = n1 + n2
    return res
}
console.log(soma(1,2))

Se quisermos somar mais um valor nesta funcao , temos que alterar a funcao e acrescentar mais um parametro n3. Com o REST podemos criar a funcao com a quantidade nao definida de parametros.
*/


function soma(...num){ //definimos num como Parametros REST, pode ser qualquer quantidade de numeros
    let res = 0
    let qtd = num.length
    for(let i = 0; i < qtd; i++){
        res+= num[i]
    }
    return res
}

console.log(soma(3,2,4,1,6,7,8,9))

console.log("_________")

//Utilizando o FOR OF na mesma funcao
function soma2(...num){
    let res = 0
    for(n of num){
        res+= n
    }
    return res
}

console.log(soma2(3,2,4,1,6,7,8,9)) //O resultado será o mesmo

