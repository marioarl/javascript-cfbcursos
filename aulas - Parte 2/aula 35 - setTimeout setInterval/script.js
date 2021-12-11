//setTimeout e setInterval são funções para maniulacao de intervalo ou de tempo.
//setTimeout, setInterval s"ao duas funções simples que controlam a passagem do tempo, mas elas tem uma diferença básica entre as duas:
//setTimeout(callBack, time) faz a chamada da função callBack no tempo especificado, após o tempo especificado chama a função e não repete a chamada da função.
//setInterval fica repetindo a chamada da função enquanto o intervalo existir.

//Função para mudar a cor da div, mas vai gerar uma cor aleatorio toda vez que a função for chamada.

var tmp; //criar a variavel global tmp
function mudaCor(){
	var obj=document.getElementById("dv1");
	//3 variaveis para a cor RGB
	var r=Math.floor(Math.random()*255);
	var g=Math.floor(Math.random()*255);
	var b=Math.floor(Math.random()*255);
	obj.style.backgroundColor="rgb("+r+" , "+g+", "+b+" )";
}

//var tmp = setTimeout(mudaCor,3000 )//2 parametros. O primeiro é a funcao e o segundo o intervalo de tempo até a chamada da funcao em ms(milisegundos)



function iniciar() { //Chamar a função de 3 em 3 segundos
	tmp = setInterval(mudaCor,1000)
}

function parar(){ //Para parar o intervalo
	clearInterval(tmp);
}


function addEventos(){
	document.getElementById("bt1").addEventListener("click", iniciar);
	document.getElementById("bt2").addEventListener("click", parar);

}


window.addEventListener("load", addEventos);