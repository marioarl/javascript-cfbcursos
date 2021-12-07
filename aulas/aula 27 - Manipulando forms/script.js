//Forms retorna uma colecao do tipo html collection, e se ele retorna uma colecao podemos trabalahr com o formato de Array

var fm=document.forms.length; //forms aponta para o formulario e nao para os elemento do formulario
document.write(fm, "<br>") //quantidade de formulario dentro da pagina -  1 formulario

//Manipulando os formularios
var fm1=document.forms[0].id;//indice do formulario que queremos trabalhar e mostra o ID na tela
document.write(fm1) 

//Utilizando o metodo item

var fm2=document.forms.item(0).id;
document.write("<br>", fm2)

//Utilizando o namedItem
var fm3=document.forms.namedItem("curso1").id;
document.write("<br>", fm3)

//Retornando o formulario com innerHTML
var fm4=document.forms.namedItem("curso2").innerHTML;
document.write("<br>", fm4)

//Apontando para elementos do formulario
var fm5=document.forms["curso2"].elements[1].value;//indice do formulario
document.write("<br>", fm5)

//Outra maneira de apontar os elementos
var fm6=document.forms[0];
var el=fm6.elements;

el[0].style.backgroundColor="red";//alterando a cor de fundo do elemento 1 do formulario 1
el[0].value="CFB Cursos"; //ALternado o valor do elemento 1 do formulario 1 

//Formatando varios elementos input de uma só vez
var fm7=document.forms[0];
var el1=fm7.elements;

for(var i=0; i < el1.length-1; i++) {
	el[i].style.backgroundColor="red";
	el[i].value="CFB Cursos";
}


//Utilizando getElementByID
document.write(document.getElementById("curso1").elements[1].value)


