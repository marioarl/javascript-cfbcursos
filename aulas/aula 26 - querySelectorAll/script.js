//selecao de todos os elementos da tag <p>
var ps = document.querySelectorAll("p");
document.write(ps[0].innerHTML, "<br><br>");

//selecao de todos os elementos de uma classe
var elementos = document.querySelectorAll(".titulo");
for (var i=0;i<elementos.length;i++){
	document.write(elementos[i].innerHTML, "<br>");
}
document.write("<br>")

//selecao de todos os elementos de uma classe e tag especifica
var elementos = document.querySelectorAll("p.titulo");
for (var i=0;i<elementos.length;i++){
	document.write(elementos[i].innerHTML, "<br>");
}
document.write("<br>")

//Selecao de elementos dentro de outros elementos, neste caso todos os elementos p que estao dentro da div
var elementos = document.querySelectorAll("div > p");
for (var i=0;i<elementos.length;i++){
	elementos[i].style.color="green";
}

//Selecao de todos elementos dentro de outros elementos, neste caso todos os elementos que estao dentro da div p e h3
var elementos = document.querySelectorAll("div > *");
for (var i=0;i<elementos.length;i++){
	elementos[i].style.color="green";
}

//Selecao de todos elementos dentro de outros elementos, neste caso todos os elementos que estao dentro da div mas com a classe .quadro
var elementos = document.querySelectorAll("div.quadro > * ");
for (var i=0;i<elementos.length;i++){
	elementos[i].style.color="darkblue";
}


//Selecao de mais de um elemento, neste caso p e h1
var elementos = document.querySelectorAll("p, h1");
for (var i=0;i<elementos.length;i++){
	elementos[i].style.color="darkorange";
}
