//Pre´carregamento

var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;
var vtempo;
var vbarra;


function preCarregamento(){
	var s = 1;
	for(var i = 0; i < 3; i++){
		imgs[i] = new Image();
		imgs[i].src = "imgs/s" +s+ ".png";
		s++;
	}
}

//Funcao que vai carregar a imagem no background da div

function carregarImg(img){
	slider.style.backgroundImage = "url('" +imgs[img].src+"')";

}

function inicia(){
	preCarregamento();
	imgAtual=0;//Indice do vetor
	maxImg = imgs.length -1;
	slider = document.getElementById("dvslider");
	vbarra= document.getElementById("dvbarra");
	carregarImg(imgAtual);
	tempoTroca=0;
	anima();
	
}

function troca(dir){
	tempoTroca=0;
	imgAtual += dir;
	if(imgAtual > maxImg){
		imgAtual = 0;
	}else if(imgAtual < 0){
		imgAtual=maxImg;
	}
	carregarImg(imgAtual);

}

function anima(){
	tempoTroca++;
	if(tempoTroca >= 200){
		tempoTroca = 0;
		troca(1);
	}
	vtempo = tempoTroca / 2;
	vbarra.style.width=vtempo+"%"

	window.requestAnimationFrame(anima);



}

window.addEventListener("load", inicia);