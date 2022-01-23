/*
OPERACAO TERNARIA
teste logico ? SE verdadeiro : SE falso

 */


let n1 = 10;
let n2 = 1;
let op = true;


/* 

Se precisariamos fazer uma estrutura que precisa saber se uma variavel é igual a outra, usariamos o IF abaixo

if(n1==n2){
    console.log("Igual");
}else{
    console.log("Diferente");
}

*/

//Será simplificado com a operacao ternaria abaixo
n1==n2 ? console.log("Igual") : console.log("Diferente");
op ? console.log("Igual") : console.log("Diferente");


const r2 = op && "Igual"
console.log(r2);