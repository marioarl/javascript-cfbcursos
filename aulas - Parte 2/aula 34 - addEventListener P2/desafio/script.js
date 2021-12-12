var px = 0;
var py = 0;
var obj;


function mover(){
	obj = document.getElementById("dv1");
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
	} else if (tecla === "Enter"){
		obj.style.backgroundColor="#fff";
		window.alert("Evento keydown removido");
		document.removeEventListener("keydown", mover)
	}
	
}

function addClique(){
	document.addEventListener("keydown", mover);
	obj.style.backgroundColor="#f00"
	alert("Evento keydown iniciado")

}


function iniciar(){
	obj=document.getElementById("dv1");
	obj.addEventListener("click",addClique);
	

}



window.addEventListener("load", iniciar);