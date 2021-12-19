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
var posJogIniY = 180, posJogIniX=10 , posCpuIniY = 180, posCpuIniX =930 ,posBolaIniX = 475, posBolaIniY = 240;

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
		if(((posJogadorY+barraH) >= campoH)||((posJogadorY) <= 0) // P3 - 3:03
		){ 
			posJogadorY += (velJogador * dirJy) * (-1);
		} 
		vjogador.style.top = posJogadorY + "px";
	}
}

//Controla a bola - P3 8:00
function controlaBola(){ 
	posBolaX += velBola * bolaX;
	posBolaY += velBola * bolaY;
	
	//Colisao com jogador
	if(
		(posBolaX <= posJogadorX+barraW) &&
		((posBolaY + bolaH >= posJogadorY)&&(posBolaY <=posJogadorY+barraH))
	){
		bolaY=(((posBolaY+(bolaH/2))-(posJogadorY+(barraH/2))) / 16);
		bolaX *= -1;
	}

	//Colisao com CPU
	if(
		(posBolaX >= posCpuX-barraW) &&
		((posBolaY + bolaH >= posCpuY)&&(posBolaY <=posCpuY+barraH))
	){
		bolaY=(((posBolaY+(bolaH/2))-(posCpuY+(barraH/2))) / 16);
		bolaX *= -1;
	}

	//Limites superior e inferior - P4 1:50
	if((posBolaY >= 480) || (posBolaY <= 0)){
		bolaY*= -1;
	}

	//Gol (direita e esquerda)- P4 5:30
	if(posBolaX >= (campoW - bolaW)){
		velBola =0;
		posBolaX = posBolaIniX;
		posBolaY = posBolaIniY;
		posJogadorY = posJogIniY;
		posCpuY = posCpuIniY;
		pontos++;
		vPaineltxtPontos.value=pontos;
		jogo=false;
		vjogador.style.top = posJogadorY + "px";
		vcpu.style.top = posCpuY + "px";
	}else if(posBolaX <= 0){
		velBola = 0;
		posBolaX = posBolaIniX;
		posBolaY = posBolaIniY;
		posJogadorY = posJogIniY;
		posCpuY = posCpuIniY;
		pontos--;
		vPaineltxtPontos.value=pontos;
		jogo=false;
		vjogador.style.top = posJogadorY + "px";
		vcpu.style.top = posCpuY + "px";
	}
	vbola.style.top=posBolaY + "px";
	vbola.style.left=posBolaX + "px";
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
		controlaBola();
	}
	frames = requestAnimationFrame(game);
}


//Iniciar o jogo - P2 2:16
function iniciaJogo(){
	if(!jogo){
		velBola = velCpu = velJogador = 8;
		cancelAnimationFrame(frames);
		jogo= true;
		dirJy = 0;
		bolaY = 0;
		if((Math.random() *10) <5){
			bolaX = -1
		}else{
			bolaX = 1
		}
		posBolaX = posBolaIniX;
		posBolaY = posBolaIniY;
		posJogadorY = posJogIniY;
		posJogadorX = posJogIniX;
		posCpuX = posCpuIniX
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
	vPaineltxtPontos = document.getElementById("txPontos");
	document.addEventListener("keydown", event => teclaDw(event));
	document.addEventListener("keyup", event => teclaUp(event)); 

}

window.addEventListener("load", inicializa)