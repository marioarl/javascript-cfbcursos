var p = document.createElement("p");
p.textContent="CFB Cursos";


var t = document.createTextNode("Curso de Javascript - CFB Cursos");
p.appendChild(t);

document.body.appendChild(p);

document.getElementById("btnAdd").addEventListener("click", function(){
    var lista=document.getElementById("listaElementos");
    var texto = document.getElementById("fnovo");
    var li=document.createElement("li");
    li.textContent=texto.value;
    lista.appendChild(li);
    texto.value="";
    texto.focus();

    
});


