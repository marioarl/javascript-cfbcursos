var px = 0;
var py = 0;

function clicar(){
	var obj = document.getElementById("dv1");
	var tecla = event.code;
	obj.addEventListener("click", clicar)
	alert("Evento keydown Adicionado")
	obj.style.backgroundColor = "#f00"
}

function mover(){
	var obj = document.getElementById("dv1");
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
		this.removeEventListener("keydown", mover);
		obj.style.backgroundColor = "#fff";
	}
	
}

document.addEventListener("click", clicar);
document.addEventListener("keydown", mover);

