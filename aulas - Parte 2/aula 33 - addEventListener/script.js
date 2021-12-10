

function msg(){
	alert("CFB Cursos")
}

/*function cor1() {
	var obj=document.getElementById("dv1");
	obj.style.backgroundColor="#fff";
	
}

function cor2() {
	var obj=document.getElementById("dv1");
	obj.style.backgroundColor="#f00"	
}

function addEventos() {
	var obj=document.getElementById("dv1");
	obj.addEventListener("mouseover", cor1);
	obj.addEventListener("mouseout", cor2);
}*/

//addEventListener

document.getElementById("dv1").addEventListener("click", msg);
addEventos();

//Utilizando a funcao cor() com 2 parametros e com funcoes anonimas

function cor(obj, cor) {
	obj.style.backgroundColor=cor;
}

function addEventos() {
	var obj=document.getElementById("dv1");
	obj.addEventListener("mouseover", /* funcao anonima*/function(event){
		cor(obj, "#fff")
	});
	obj.addEventListener("mouseout", function(event) {
		cor(obj, "#f00")
	});
}


