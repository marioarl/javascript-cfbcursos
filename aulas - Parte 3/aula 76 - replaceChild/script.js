var novoH1 = document.createElement("h1");
var listaCursos=document.getElementById("cfbcursos");
var antigoP = listaCursos.childNodes[15];
var txtH = document.createTextNode(antigoP.innerHTML);
novoH1.appendChild(txtH)
listaCursos.replaceChild(novoH1, antigoP);//2 parametros - 1o. elemento novo , 2o. elemento antigo