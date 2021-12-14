function trocaCarro(c){
	var obj = document.getElementById("carro");//2 parametros , 1o. é o atributo e o 2o. é o valor desse atributo
	if (c == 1){
		obj.setAttribute("class", "c1");
	}else if ( c == 2){
		obj.setAttribute("class", "c2");
	}else if ( c == 3){
		obj.setAttribute("class", "c3");
	}
}

function removerCarro(){
	document.getElementById("carro").removeAttribute("class");
}

function verifica(){
	if (document.getElementById("carro").hasAttribute("class")){
		alert("Atributo class está na tag");
	} else {
		alert("Sem atributo class")
	}
}


