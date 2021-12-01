//Declaracoes de variaveis com LET
// A diferença é que quando declaramos no inicio do código com a palavra var, aquela variavel é global. 
// Isso significa que ela pode ser acessada de qualquer parte do programa, mesmo dentro de um escopo de uma funcao.
// COm o LET esse cenario muda um pouco. A variavel que for declarada com o LET, ela faz parte no escopo onde ela foi declarada.
//Isso vale para um bloco IF por exemplo. SUponhamos que tenho uma variavel declarada como GLOBAL, vamos ter acesso ao codigo inteiro, dentro de um IF se eu acessar essa variavel, e mudar o seu valor, mudará em todo o bloco.
//De forma diferente se declaramos dentro desse IF uma variavel com LET, onde o ESCOPO dessa variavel é o bloco do IF.

//Criando uma variavel global. A variavel num é utilizada tanto dentro do bloco IF quanto fora do bloco.

var num = 10;

document.write(num, "<br>"); //esta linha de comando é a prova de que a variavel num declarada no inicio, funciona fora do bloco.

if(num==10) {
	document.write(num, "<br>");
}
document.write(num, "<br>"); //esta linha de comando é a prova de que a variavel num declarada no inicio, funciona fora do bloco.

document.write("<hr>")


//Alterando o valor da variavel num1 dentro do bloco IF

var num1 = 10;

document.write(num1, "<br>"); //Nesta linha será impresso o numero 10

if(num1==10) {
	num1=5;
	document.write(num1, "<br>"); //Nesta linha será impresso o numero 5
}
document.write(num1, "<br>"); //Nesta linha será impresso o numero 5

//Isto ocorre porque mudamos o valor de num dentro do bloco IF e isto tambem prova que declarando uma variavel com var, ela servirá em todo o código.

document.write("<hr>")

//Criando uma variavel num2 dentro do bloco IF com LET

var num2 = 10;

document.write(num2, "<br>"); 

if(num2==10) {
	let num2=5;
	document.write(num2, "<br>"); //Entao o LET passa a ser uma variavel valida somente dentro do escopo de IF
}
document.write(num2, "<br>"); 


document.write("<hr>")


//Criando uma variavel num3 no inicio do codigo com LET

let num3 = 10;

document.write(num3, "<br>"); 

if(num3==10) {
	num3=5; //Aqui informamos que o num3 vale 5
	document.write(num3, "<br>");//Será impresso num = 5, pois dentro do IF foi declarado como 5, apesar de agora o LET ser GLOBAL.
}
document.write(num3, "<br>"); //Será impresso num = 5, pois dentro do IF foi declarado como 5, apesar de agora o LET ser GLOBAL.


document.write("<hr>")