//Metodo indexOf , retorna a posicao de um caractere 

var texto1=document.getElementById("txt").innerHTML;
var res = texto1.indexOf("C"); //se existir mais de um caractere na string, o metodo retornará  1a. ocorrencia
document.write("<h2 style='color:#f00'>Metodo indexOf</h2>")

if (res < 0){
	document.write("Letra nao encontrada");
}else {
	document.write(res, "<br>");
}

document.write("<hr>")


//Metodo lastIndexOf , retorna a ULTIMA posicao de um caractere 

var texto1=document.getElementById("txt").innerHTML;
var res = texto1.lastIndexOf("C"); 

if (res < 0){
	document.write("Letra nao encontrada");
}else {
	document.write(res);
}
document.write("<hr>")


//Metodo localeCompare , faz uma comparacao entre 2 strings. se o resultado for 0 significa que as strings sao iguais, se diferentes de 0 sao diferentes

var texto1=document.getElementById("txt").innerHTML;
var texto2="CFB Cursos - Curso DE Javascript";
var res = texto1.localeCompare(texto2); 

if (res == 0){
	document.write("Strings iguais");
}else {
	document.write("Strings diferentes");
}
document.write("<hr>")


//Metodo slice corta a string em um ponto especifico e vai retornar o corte especificado

var texto1=document.getElementById("txt").innerHTML;
var res = texto1.slice(3,10); //O primeiro parametro colocar o indice onde se inicia e o segundo parametro onde termina

document.write(res)

document.write("<hr>")


//Metodo split picar toda a string no caracter que indicarmos

var texto1=document.getElementById("txt").innerHTML;
var res = texto1.split(" "); //o espaço significa que o metodo considera todos os espacos como sendo uma divisao e vira um vetor

document.write(res[5])

document.write("<hr>")


//Metodo substr semelhante ao metodo slice que definimos o comeco e o final do corte, o metodo substr iremos indicar a posicao inicial e o tamanho do corte

var texto=document.getElementById("txt").innerHTML;
var res = texto.substr(4,6);//nao se utiliza mais esse metodo

document.write(res)

document.write("<hr>")


//Metodo toLowerCase que converte a string para minusculo

var texto=document.getElementById("txt").innerHTML;
var res = texto.toLowerCase();

document.write(res)

document.write("<hr>")


//Metodo toUpperCase que converte a string para MAIUSCULO

var texto=document.getElementById("txt").innerHTML;
var res = texto.toUpperCase().substr(22,10);//Podemos tambem incluir mais de um metodo

document.write(res)

document.write("<hr>")