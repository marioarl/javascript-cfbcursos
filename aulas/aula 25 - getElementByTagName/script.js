var tagsP=document.getElementsByTagName('p');

document.write(tagsP[0].innerHTML, "<br>"); //Conteudo da primeira tag P indice

document.write(tagsP[1].innerHTML, "<br>")


//Utilizando a variavel para pegar o elemento pelo indice
var tagsP1=document.getElementsByTagName('p')[2];
document.write(tagsP1.innerHTML, "<br>")


//Formatar um elemento
var tagsP2=document.getElementsByTagName('p');
tagsP2[3].style.color="red", "<br>";


//Formatando todos os elementos

var tagsP3=document.getElementsByTagName('p');

for(var i=0; i<tagsP3.length;i++){
	tagsP3[i].style.color="red";
}

