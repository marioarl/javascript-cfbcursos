/*O metodo SEARCH nao retorna ARRAy, porque  retorna a posicao da 1a. ocorrencia encontrada
*/

var texto = document.getElementById("txt").innerHTML;

var res = texto.search(/aula/i);

document.write(res + "<br>");
document.write("<hr>");



/*O metodo REPLACE substitui determinado caractere dentro da string
*/

var texto = document.getElementById("txt").innerHTML;

var res = texto.replace(/curso/i, "aula");

document.write(res + "<br>");
document.write("<hr>");

/*Ainda no metodo REPLACE,  substituindo todas as palavras "curso" da frase
*/

var texto = document.getElementById("txt").innerHTML;

var res = texto.replace(/curso/ig, "aula");

document.write(res + "<br>");
document.write("<hr>");


/*O metodo charAt retorna o caractere indicado com a posicao no parametro
*/

var texto = document.getElementById("txt").innerHTML;

var res = texto.charAt(22);

document.write(res + "<br>");
document.write("<hr>");


/*O metodo charCodeAt retorna o codigo ASCII do caractere indicado com a posicao no parametro
*/

var texto = document.getElementById("txt").innerHTML;

var res = texto.charCodeAt(22);

document.write(res + "<br>");
document.write("<hr>");

/*O metodo String.fromCharCode() retorna o caractere de acordo com o codigo ASCII informado
*/

document.write(String.fromCharCode(74))
document.write("<hr>");



/*O metodo concat concatena uma string na outra atraves de uma variavel
*/
var texto = document.getElementById("txt").innerHTML;
var txt2 = " Esta string estava na var txt2";
var res = texto.concat(txt2);

document.write(res + "<br>");
document.write("<hr>");


/*Ou diretamente na string que queremos juntar
*/
var texto = document.getElementById("txt").innerHTML;
var res = texto.concat(" Esta string foi feita no metodo");

document.write(res + "<br>");
document.write("<hr>");



/*Mais de uma variavel com o metodo concat
*/
var texto = document.getElementById("txt").innerHTML;
var txt2 = " Esta string estava na var txt2";
var txt3 = " Texto de teste"
var res = texto.concat(txt2 + txt3);

document.write(res + "<br>");
document.write("<hr>");