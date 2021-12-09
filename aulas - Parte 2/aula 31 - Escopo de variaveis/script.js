var nomeCor="Vermelho"

function cor() {
	var nomeCor="Azul";//Nao é visivel fora da function
	document.write(nomeCor, "<br>")
}
cor();
document.write(nomeCor, "<br>")

//Dentro de uma funcao, conseguimos acessar as variaveis que estao fora da funcao, mas as variaveis que estao dentro da funcao nao é possivel acessa-las no resto do programa.

