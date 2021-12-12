//Vamos interceptar o evento de uma forma diferente do exercicio anterior.

var dx; //direcao x
var dy; //direcao y
var px; //posicao x
var py; //posicao y
var vel; //velocidade
var obj; //dv1
var tmp; //timer setInterval

function iniciar(){ //responsavel por inicializar as variaveis globais
	dx = 0;
	dy = 0;
	px = 0;
	py = 0;
	vel= 1;
	obj=document.getElementById("dv1");
	document.addEventListener("keydown", teclaDw);
	document.addEventListener("keyup", teclaUp);
	tmp=setInterval(enterFrame, 1); //valor em milisegundos
}

function teclaDw(){
	var tecla=event.key;
	if (tecla == "ArrowLeft"){
		dx = -1;
	} else if(tecla == "ArrowUp"){
		dy = -1;
	} else if(tecla == "ArrowRight"){
		dx = 1;
	} else if( tecla == "ArrowDown"){
		dy = 1;
	}
}

function teclaUp(){
	var tecla=event.key;
	if (tecla == "ArrowLeft"){
		dx = 0;
	} else if(tecla == "ArrowUp"){
		dy = 0;
	} else if(tecla == "ArrowRight"){
		dx = 0;
	} else if( tecla == "ArrowDown"){
		dy = 0;
	}
}

function enterFrame(){
	px += dx*vel;
	py += dy*vel;
	obj.style.left=px+"px";
	obj.style.top=py+"px";
}

window.addEventListener("load", iniciar);