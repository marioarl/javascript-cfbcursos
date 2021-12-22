var painel, btnB, btnF,btnG ;

function hB(){
	window.history.back();
}

function hF(){
	window.history.forward();
}

function hg(){
	window.history.go(-2);//parametro informado será a quantidade que o metodo irá voltar (valor negativo) ou ir para frente(valor positivo) 
}

function inicia(){
	btnB = document.getElementById("btnBack");
	btnF = document.getElementById("btnForward");
	btnG = document.getElementById("btnBack2")

	btnB.addEventListener("click", hB);
	btnF.addEventListener("click", hF);
	btnG.addEventListener("click", hg);
	painel= document.getElementById("info");
	painel.innerHTML= history.length;

}
window.addEventListener("load", inicia)