window.alert("CFB Cursos - Curso de JavaScript") //alert é um metodo do objeto window, não há a necessidade de chamar o objeto window para o alert.

//operando com variaveis e constantes

var canal="CFB Cursos";
var curso="Curso de JavaScript";
alert(canal + "-" + curso);

//dentro do metodo alert, não funciona os codigos do html, se vc colocar um codigo <br>, simplesmente o alert vai desconsiderar.

var canal1 = "CFB Cursos";
var curso1 = "Curso de Python";
const fim = "FIM"
const separador = " - ";
const quebra = "<br>" // alert ignora o codigo html e escreve como uma string
alert(canal1 + separador + curso1 + quebra + fim) 

// para quebrar uma linha dentro do alert, deve-se utilizar \n