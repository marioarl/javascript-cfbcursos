//Elementos - P1 10:50
var vbtIniciar;
var vbola;
var vcpu;
var vjogador;
var vPaineltxtPontos;

//Controle de animacao - P1 12:08
var game, frames;

//Posições - P1 13:00
var posBolaX, posBolaY;
var posJogadorX, posJogadorY;
var posCpuX, posCpuY;

//Direção de acordo com a tecla - P1 15:00
var dirJy;

//Posicoes inicias - P1 15:27
var posJogIniY = 180, posCpuIniY = 180, posBolaIniX = 475, posBolaIniY = 240;

//Tamanhos - P1 17:40
var campoX = 0, campoY = 0, campoW = 960, campoH = 500;
var barraW = 20, barraH = 140, bolaW=20, bolaH = 20;

//Direcao - P1 19:42
var bolaX, bolaY;
var cpuY = 0;

//Velocidade - P1 - 20:26
var velBola, velCpu, velJogador;

//Controle
var pontos = 0;
var tecla;
jogo = false; //P2 06:05


//Controle do jogador - P2 16:10
function controlajog(){
	if(jogo){
		posJogadorY += velJogador * dirJy;
		vjogador.style.top = posJogadorY + "px";
	}
}


//Controle das teclas - P2 12:34
function teclaDw(event){
	tecla = event.key;
	if(tecla === "ArrowUp"){
		dirJy = -1;
	}else if(tecla === "ArrowDown"){
		dirJy = 1;
	}
}

function teclaUp(event){
	tecla = event.key;
	if(tecla === "ArrowUp"){
		dirJy = 0;
	}else if(tecla === "ArrowDown"){
		dirJy = 0;
	}
}




//Controle da animacao - P2 9:31
function game(){
	if (jogo){
		controlajog();
	}
	frames = requestAnimationFrame(game);
}


//Iniciar o jogo - P2 2:16
function iniciaJogo(){
	if(!jogo){
		cancelAnimationFrame(frames);
		jogo= true;
		dirJy = 0;
		posBolaX = posBolaIniX;
		posBolaY = posBolaIniY;
		posJogadorY = 0;
		posCpuY = posCpuIniY;
		game();
	}	

}

//Inicializar os componentes do jogo - P2 3:25
function inicializa(){
	velBola = velCpu = velJogador = 8;
	vbtIniciar = document.getElementById("btIniciar");
	vbtIniciar.addEventListener("click", iniciaJogo);
	vjogador = document.getElementById("dvJogador");
	vcpu = document.getElementById("dvCpu");
	vbola = document.getElementById("dvBola");
	vPaineltxtPontos = document.getElementById("txtPontos");
	document.addEventListener("keydown", event => teclaDw(event));
	document.addEventListener("keyup", event => teclaUp(event)); 

}

window.addEventListener("load", inicializa)