/*
Regra de construcao do Arrow Function
(parametros) => expressao

() => expressao         -- sem parametros
p1 => expressao         -- Quando há um só parametro
(p1,p1) => expressao    -- Quando há mais de um parametro
(p1) => expressao       -- Quando a EXPRESSAO for simples, apenas 1 comando
(p1) => {               -- Quando a EXPRESSAO for composta por mais de 1 comando 
    expressao1
    expressao2
}

*/

const soma = (p1,p2) => {
    return p1 + p2
}

console.log(soma(2,3))

const soma2 = (...num) => {
    let r = 0
    for(n of num)
        r+=n
    return r
}
console.log(soma2(2,30,7,6,8,9))

const par = num => {
    if(num % 2 == 0)
        return true
    else
        return false
    
}

console.log(par(3) ? "É PAR" : "É IMPAR")