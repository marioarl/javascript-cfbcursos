//innerwidth e innerheight
 var l, a, px,py;
 var painel = document.getElementById("painel");

 

 
 
 function info(){
	l = window.innerWidth;//largura externa = outerWidth
	a = window.innerHeight;
	px = window.screenX;
	py = window.screenY;

	painel.innerHTML = "Largura:"+ l + "<br>" + "Altura: " +a + "<br>X:" + px +"<br>Y:" + py; 
	
 }
