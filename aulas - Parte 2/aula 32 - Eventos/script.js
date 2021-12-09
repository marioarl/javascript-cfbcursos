//Eventos sao acoes executadas dentro de um programa é disparado um EVENTO
//Exemplo Quando clicamos em um botao é disparado o evento onclick
//Quando movimentamos o mouse é disparado o onmousemove
//Entao podemos interceptar esses eventos disparados e associar comando a esse evento, entao criamos uma funcao por exemplo.

function mudaCor(obj,cor){
	obj.style.backgroundColor=cor;	
}


//Mudar a posicao do botao em um lugar aleatorio da tela
function mudaPos(obj){
	obj.style.position="absolute";
	obj.style.left=Math.random()*500+"px";
	obj.style.top=Math.random()*500+"px";
}

//Interface com o usuario de acordo com a hora
function ola(){
	var data=new Date();
	var hora=data.getHours();
	var txt="";
	if(hora < 12){
		txt="Bom dia";
	} else if(hora < 18){
		txt="Boa tarde";
	}else{
		txt="Boa noite"
	}
	alert("Olá, " + txt)
}