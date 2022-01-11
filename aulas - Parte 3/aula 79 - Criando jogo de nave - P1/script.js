var diryJ, dirxJ, jog, velJ, pjx, pjy;
var velT;
var tamTelaW, tamTelaH;
var jogo;
var frames;



function teclaDw(event){
    var tecla = event.key;
    if(tecla == "ArrowLeft"){   
        dirxJ=-1; 
    
    }else if (tecla == "ArrowRight") {
        dirxJ = 1;

    }else if (tecla == "ArrowUp"){
        diryJ=-1;

    }else if (tecla == "ArrowDown"){
        diryJ =1;

    }else if (tecla == " "){
        //Atirar
        atira(pjx+17, pjy);
    }
}

function teclaUp(event){
    var tecla = event.key;
    if((tecla == "ArrowLeft") || (tecla == "ArrowRight")){   
        dirxJ=0; 
    
    }else if ((tecla == "ArrowUp") || (tecla == "ArrowDown")){
        diryJ = 0;
    }
}


function atira(x, y){
    var t = document.createElement("div");
    var att1 = document.createAttribute("class");
    var att2 = document.createAttribute("style");
    
    att1.value = "tiroJog";
    att2.value = "top:"+y+"px;left:" +x+ "px";
    t.setAttributeNode(att1);
    t.setAttributeNode(att2);
    document.body.appendChild(t);
}

function controleTiros(){
    var tiros = document.getElementsByClassName("tiroJog");
    var tam=tiros.length;
    for(var i=0; i< tam; i++){
        if(tiros[i]){
            var pt=tiros[i].offsetTop;
            pt-=velT;
            tiros[i].style.top = pt + "px";
            if(pt<0){
                document.body.removeChild(tiros[i]);
                //tiros[i].remove(); ==> Podemos tambem utilizar o .remove()
            }
        }
    }

}

function controlaJogador(){
    pjy+= diryJ * velJ;
    pjx+= dirxJ * velJ;
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";

}

function gameLoop(){
    if(jogo){
        //FUNCOES DE CONTROLE
        controlaJogador();
        controleTiros();
    }
    frames = requestAnimationFrame(gameLoop);

}

function inicia(){
    jogo = true;

    //Ini Tela
    tamTelaH = window.innerHeight;
    tamTelaW = window.innerWidth;

    //Ini Jogador
    dirxJ = diryJ=0;
    pjx = tamTelaW / 2;
    pjy = tamTelaH / 2;
    velJ = velT =5;
    jog = document.getElementById("naveJog");
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";

    gameLoop()


}

window.addEventListener("load", inicia);
document.addEventListener("keydown", teclaDw);
document.addEventListener("keyup", teclaUp);