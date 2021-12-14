/*Modificadores

Modificador	Descricao
	i		Busca sem case-sensitive, ou seja, nao diferencia letras maiusculas de minusculas
	g		Diz ao metodo para encontrar todas as ocorrencias da palavra e nao para na primeira encontrada, cada ocorrencia é armazenada em uma posicao
	m		Pesquisa normal sem armazenar em forma de array
*/


//MOdificador g
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/de/g); //Colocar o que voce quer pesquisa entre / / e colocar o modificador

document.write(res + " : " + res.length);

document.write("<hr>");



//MOdificador ig
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/Javascript/ig); //Colocar o que voce quer pesquisa entre / / e colocar o modificador, pode-se colocar 2 modificadores

document.write(res + " : " + res.length);

document.write("<hr>");


//Trabalhando o resultado como array
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/Javascript/ig); //Colocar o que voce quer pesquisa entre / / e colocar o modificador, pode-se colocar 2 modificadores

document.write(res + " : " + res.length + "<br>");

document.write(res[0])//utilizando o indice dentro do array


document.write("<hr>");



//Quantidade de letras na frase
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/o/ig); //Colocar o que voce quer pesquisa entre / / e colocar o modificador, pode-se colocar 2 modificadores

document.write(res + " : " + res.length + "<br>");

document.write(res[0])//utilizando o indice dentro do array


document.write("<hr>");


//Quantidade de letras na frase, pesquisa com mais de 1 letra
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/[oa]/ig); // colocar as duas letras entre [], pode-se utilizar tambem (/o|a/)
document.write(res + " : " + res.length + "<br>");

document.write(res[0])//utilizando o indice dentro do array


document.write("<hr>");


//Quantidade de todas as letras na frase exceto as letras o, a
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/[^oa]/ig); // Acrescentar o caracter ^ (excluir as letras o e a)
document.write(res + " : " + res.length + "<br>");

document.write(res[0])//utilizando o indice dentro do array


document.write("<hr>");


//Quantidade de todas as letras na frase entre a,g
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/[a-o]/ig); // Acrescentar o caracter -
document.write(res + " : " + res.length + "<br>");




document.write("<hr>");


/*Colchetes
Expressao	Descricao
[abcd]		Pesquisa pelos caracteres a, b, c e d
[^ab]		Pesquisa por todos os caracteres, menos os a e b
[a-f]		Pesquisa pelos caracteres de a até f
[^a-f]		Pesquisa or todos os caracteres ,menos de a até f
[a | f]		Pesquisa pelos caracteres a e f, semelhante a primeira opcao	
*/

/*Utilizando metacaracteres dentro da pesquisa predefinidos

Metacaractere	Descricao
	\w			Somente letras e numerais, iginorando espacos e tracos
	\W			Caracteres diferentes de numeros e letras
	\d			Pesquisa por numerais
	\D			Todos os caracteres que nao sao numerais
	\s			Pesquisa pelos espacos
	\S			Todos os caracteres menos espaços
	\b			Ocorrencia que iniciem ou terminem com letra ou numero, cada ocorrencia que iniciar e terminar com um numero ou letra conta como 2
	\B			Ocorrencia que NAO iniciem ou terminem com uma letra ou numero
	\O			Procura por carateres nulos
	\n			Procura por quebra de linha
	\r			Procura por caractere de retorno de carro ENTER
	\t			Procura caractere de tabulacao TAB
	\v			Procura por caractere de tabulacao vertical
	s+			Procura por palavras que contenham uma ou mais letras s
*/

// Procurando numeros
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/\d/ig); 
document.write(res + " : " + res.length + "<br>");



document.write("<hr>");


// Procurando todos os caracteres que nao sao numeros
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/\D/ig); 
document.write(res + " : " + res.length + "<br>");
document.write("<hr>");

// Ignorando todos os pontos, traço espacos
var texto = document.getElementById("txt").innerHTML;

var res = texto.match(/\w/ig); 
document.write(res + " : " + res.length + "<br>");
document.write("<hr>");