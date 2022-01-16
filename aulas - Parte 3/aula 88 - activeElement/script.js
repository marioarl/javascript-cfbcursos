var dvcx, frames, dvcx1;


function loop(){
    dvcx.innerHTML = document.activeElement.tagName; //Nome da tag
    frames = requestAnimationFrame(loop);

}


function ativo(){ //Somente o texto selecionado
    var cx = document.getElementById("texto_selecionado");
    var elemento = document.activeElement;
    var selecao = elemento.value.substring(elemento.selectionStart, elemento.selectionEnd);
    cx.innerHTML = selecao;
}

function loop2(){
    dvcx1.innerHTML = document.activeElement; //Elemento ativo
    frames = requestAnimationFrame(loop2);

}
window.addEventListener("load", inicia);

function inicia(){
    dvcx = document.getElementById("cx");
    dvcx1 = document.getElementById("cx1");
    loop();
    loop2();
    var texto = document.getElementById("txt_original");
    texto.addEventListener("mouseup", ativo);

}