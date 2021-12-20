//Abrir uma nova janela

//window.open();

//Podemos escrever e adicionar elementos dentro da janela, fica mais facil associando esta janela em uma variavel
var minhaJanela;
function abreJ(){
	minhaJanela = window.open("index.html", "_blank", "width=300, height=300, top=300, left=300"); 
	/*
	1o. parametro: é uma url ou pagina que queremos abrir - 
	2o. parametro: comportamento da abertura da janela _self abre na mesma janela, _blank abre em outra janela. Podemos tambem associar a um iframe dentro da propria pagina, colocando no parametro o nome do iframe
	3o. parametro: Como deveremos abrir a janela (tamanho, full-scrren, posicao..) Ex: janela menor(width=300, height=300), outra posicao (top=300, left=300)	
	*/
}

function fechaJ(){
	minhaJanela.close()
}

