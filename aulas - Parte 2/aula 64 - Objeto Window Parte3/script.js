var l, a, px,py;
 var painel = document.getElementById("painel");

 

 
 
 function info(){
	l = window.innerWidth;//largura externa = outerWidth
	a = window.innerHeight;
	px = window.screenX;
	py = window.screenY;

	painel.innerHTML = "Largura:"+ l + "<br>" + "Altura: " +a + "<br>X:" + px +"<br>Y:" + py; 
	
 }

 //Rolar a janela em uma determinada posicao da tela
 function rolar(){
	 window.scrollBy(500,500); //2 parametros valores para X e Y
 }

//para a funcao frames e index.html
var qtde=window.length;
var painel2 = document.getElementById("painel2").innerHTML=qtde;
 function frame(){
	 window.open("index.html", "_blank")
	 
 }
 
 //Gerenciamento de frames em qual janela vai abrir
 function abrir(){
	for(var i=0; i <qtde; i++){
		//Para abrir em todos os frames, apagar a window.frame abaixo e colocar aqui, onde o indice será [i]

	}
	window.frames[1].location="http://cfbcursos.com.br" 
 }
 
