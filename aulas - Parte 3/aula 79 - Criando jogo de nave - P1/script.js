var diryJ, dirxJ, jog, velJ, pjx, pjy;
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

    }else if (tecla == "Space"){
        //Atirar
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

function controlaJogador(){
    
    

}

function gameLoop(){
    if(jogo){
        //FUNCOES DE CONTROLE
    }
    frames = requestAnimationFrame(gameLoop);

}

function inicia(){
    jogo = false;

    //Ini Tela
    tamTelaH = window.innerHeight;
    tamTelaW = window.innerWidth;

    //Ini Jogador
    dirxJ = diryJ=0;
    pjx = tamTelaW / 2;
    pjy = tamTelaH / 2;
    velJ =5;
    jog = document.getElementById("naveJog");
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";


}

window.addEventListener("load", inicia);
document.addEventListener("keydown", teclaDw);
document.addEventListener("keyup", teclaUp);