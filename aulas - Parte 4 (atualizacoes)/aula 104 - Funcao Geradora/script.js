/*
Funcao geradora permite a devolucao do controle para quem fez a chamada da funcao.
Quando uma funcao é criada, chamamos a funcao ela será executada do inicio ao fim e vai devolver o controle para quem fez a chamada somente no final da funcao, comportamento basico de qualquer funcao.

Se precisarmos no meio do processo devolver o controle para quem fez a chamada e so depois continuar executando, as funcoes normais isso nao é possivel, mas com as funcoes geradoras isso é permitido


*/


function* cores(){ //Criando a funcao geradora, logo apos o comando function colocar o *
    yield 'Vermelho';
    yield 'Verde';
    yield 'Azul';
    yield 'Amarelo';
    yield 'Roxo';
    yield 'Preto';
    yield 'Branco';
}


for(let c of cores()){ //Gerencia o next automaticamente
    console.log(c)
}


const c1= cores()

console.log(c1.next())//Retorna o primeiro elemento
console.log(c1.next())//E a cada NEXT ele retorna o proximo elemento
console.log(c1.next())
console.log(c1.next())
console.log(c1.next())
console.log(c1.next())
console.log(c1.next())
console.log(c1.next()) //Se fizermos um outro NEXT, mesmo nao tendo mais informacoes a imprimir, aparecerá como UNDEFINED


function * cont(n){
    let c = 0
    while(c<n){
        yield console.log(c)
        c++
    }
}

const ct = cont(10)
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())