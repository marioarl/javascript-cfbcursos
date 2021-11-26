var canal; // criar uma variavel
var nome, site, idade; // criando varias variaveis com o modo de declaracoes multiplas colocando ( , ) entre as variaveis.

document.write(canal) // imprime o que consta dentro da variavel, mas como a variavel não foi inicializado, o browser imprimirá na tela undefined.

var texto="CFB Cursos"; // agora que já foi atribuido uma valor para a variavel,  aparecerá na tela.

document.write("<br>", texto); //note que podemos misturar dentro do metodo write uma string com codigo html e a variavel utilizando a virgula ( , ) para separa-las.

//Nome das variaveis

var Cidade; // Pode-se utilizar iniciando a variavel com letra maiuscula

var sigla123; // Com numeros
var _documento; // inciando com _

/* - Nao pode comecar uma variavel com numero
   - Nao pode utilizar o & (e comercial)
   - 
*/

//Declaracao implicita para criar variavel

linguagem = "JavaScript" // nao é necessario utilizar a palavra reservada var
document.write("<br>" , linguagem)

var texto2 = "<br>" + texto + " " + linguagem // é possivel tambem dentro da variavel concatenar outras variaveis, codigo html e strings
document.write(texto2);

var n1 = 2021;
var n2 = 10;
var soma = n1 + n2 //tambem podemos declarar uma variavel somando outras duas que sejam declaradas como inteiros
document.write("<br>", soma)

var soma2 = texto2 + " " + (n1 + n2) // se houver a necessidade de declarar uma variavel com variaveis que sejam string e inteiros, devemos colocar as variaveis inteiros entre parenteses ( )
document.write(soma2)