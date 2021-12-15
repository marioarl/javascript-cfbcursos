//Metodo toString - COnverte o conteudo de numeros em String

var texto=document.getElementById("txt").innerHTML;
var num=15;
var res=num.toString()
var bin=num.toString(2)//Este parametro 2 significa binario
var oct=num.toString(8)//Este parametro 8 significa octal
var hex=num.toString(16)//Este parametro 16 significa hexadecimal

document.write(res, "<br>");
document.write(bin, "<br>");
document.write(oct, "<br>");
document.write(hex, "<br>");

document.write("<hr>")


//Metodo trim - Apaga espacos antes e depois da string

var texto= "                   CFB Cursos - Curso de Javascript"

var res=texto.trim();
//alert(res);

document.write(res, "<br>");

document.write("<hr>")


//Imprimir Caracteres especiais

var texto = "CFB Cursos - \"Curso\" de Javascript";// Na palavra que necessita do caratere especias coloca-se \"Curso\"

document.write(texto, "<br>");

document.write("<hr>")


//Imprimir Caracteres especiais \n quebra de linha nao funciona no html só no alert

var texto = "CFB Cursos - \n Curso\n de Javascript";

//alert(texto);
document.write(texto, "<br>");

document.write("<hr>")
