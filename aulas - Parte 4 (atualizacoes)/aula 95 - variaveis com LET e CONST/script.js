var num=10;
var num=100;

console.log(num)//Ira mostrar o utimo valor declarado

let num1=10;
//Declarando uma variavel com let, nao é possivel declarar outra com o mesmo nome, no log irá aparecer o erro: "Uncaught SyntaxError: Identifier 'num1' has already been declared", dizendo que a variavel num1 já foi declarada. 

function x(){
    let num1 = 100; //Para criar uma variavel de mesmo nome com LET, esta variavel deve estar em outro ESCOPO
    console.log(num1);
}

//CONST - Uma vez declarado o valor de CONST, nao é possivel altera-lo no programa

const num2=10
console.log(num2);





