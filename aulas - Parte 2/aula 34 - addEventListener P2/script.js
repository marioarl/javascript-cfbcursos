//Como vamos criar uma animacao de deslocamento, precisamos de algumas variaveis
var px = 0; //No eixo x para esquerda é negativo e x para a direita é positivo 
var py = 0; //No eixo y para cima é negativo e y para baixo é positivo

//Precisamos adicionar um evento que intercepte qunado é pressionada uma tecla e esse evento é o keydown, utilizando uma funcao anonima function(event)

/*document.addEventListener("keydown", function(event){
	var obj=document.getElementById("dv1");
	var tecla = event.key;
	//As teclas direcionais tem os seguintes codigos
	//37 ==> esquerda - 38 ==> cima - 39 ==> direita - 40 ==> baixo

	if (tecla === "ArrowLeft") {
		px -= 10; //Tamanho do deslocamento em pixel
		obj.style.left = px+"px";
	} else if(tecla === "ArrowUp") {
		py-=10;
		obj.style.top=py+"px";
	} else if (tecla === "ArrowRight") {
		px += 10;
		obj.style.left=px+"px";
	} else if (tecla === "ArrowDown") {
		py += 10;
		obj.style.top=py+"px";
	}

});
*/

//Utilizando uma funcao criada move()

/*
function move(){
	var obj=document.getElementById("dv1");
	var tecla = event.key;

	if (tecla === "ArrowLeft") {
		px -= 10;
		obj.style.left = px+"px";
	} else if(tecla === "ArrowUp") {
		py-=10;
		obj.style.top=py+"px";
	} else if (tecla === "ArrowRight") {
		px += 10;
		obj.style.left=px+"px";
	} else if (tecla === "ArrowDown") {
		py += 10;
		obj.style.top=py+"px";
	}
	
}
document.addEventListener("keydown", move)
*/

// O comando removeEventListener remover um evento que esteja adicionado a um elemento. Neste exemplo quando a tecla enter for pressionada removerá o evento keydown

function move(){
	var obj=document.getElementById("dv1");
	var tecla = event.key;

	if (tecla === "ArrowLeft") {
		px -= 10;
		obj.style.left = px+"px";
	} else if(tecla === "ArrowUp") {
		py-=10;
		obj.style.top=py+"px";
	} else if (tecla === "ArrowRight") {
		px += 10;
		obj.style.left=px+"px";
	} else if (tecla === "ArrowDown") {
		py += 10;
		obj.style.top=py+"px";
	} else if (tecla === "Enter") {
		alert("Evento keydown removido")
		this.removeEventListener("keydown", move);
	}
	
}
document.addEventListener("keydown", move)