
/*
CUIDADO a funcao se chama new Function, com F maiusculo.

2 STRINGS:

1 ==> O conjunto de parametros de será utilizado na funcao;
2 ==> A declaracao do que a funcao irá fazer
*/


let soma = new Function("n1,n2", "return n1+n2") // 2 parametros

let s=soma

console.log(s(2,3))