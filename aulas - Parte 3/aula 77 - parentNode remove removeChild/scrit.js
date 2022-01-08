var elemento = document.getElementById("p5");
//alert(elemento.parentNode.nodeName); //mostra quem é o pai
elemento.remove() //remover o elemento

//removendo com removeChild
var elementos = document.getElementById("cfbcursos").childNodes;
document.getElementById("cfbcursos").removeChild(elementos[1]);