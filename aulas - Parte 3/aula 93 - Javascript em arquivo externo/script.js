
var dv1;
window.addEventListener("load", inicia);

function inicia(){
    dv1 = document.getElementById("dv1");
    dv1.addEventListener("mouseover", troca);
    dv1.addEventListener("mouseout", trocaOriginal);
}

function troca(){
    var obj = event.target;
    obj.style.backgroundImage="url('c2.png')";
}

function trocaOriginal(){
    var obj = event.target;
    obj.style.backgroundImage="url('c1.png')";
}