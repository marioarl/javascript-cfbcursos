//childNodes == permite controlar ou contar determinados elementos da pagina ou de algum outro elemento.  


var p = document.createElement("p");
p.textContent="CFB Cursos";


var t = document.createTextNode("Curso de Javascript - CFB Cursos");
p.appendChild(t);

document.body.appendChild(p);
document.getElementById("btnContar").addEventListener("click", function(){
    var lista=document.getElementById("listaElementos");
    var num = lista.childNodes.length; //propriedade childNotes
    alert(num);


});
document.getElementById("btnAdd").addEventListener("click", function(){
    var lista=document.getElementById("listaElementos");
    var texto = document.getElementById("fnovo");
    var li=document.createElement("li");
    li.textContent=texto.value;
    lista.insertBefore(li, lista.childNodes[0]);// 2 parametros : 1- novo elemento  2- e antes de quem queremos inserir
    texto.value="";
    texto.focus();

    
});
