//Forma simples de criar uma funcao
function escreve(){
	document.write("Curso de JavaScript<br>");
}

escreve();
escreve();
escreve();

document.write("<hr>")


//Criando uma funcao com 2 parametros
function soma(n1,n2) {
	var res=n1+n2;
	document.write(res, "<br>");
}

soma(3,4)
soma(10,5)
soma(6,6)

document.write("<hr>")

//Criando funcoes que retornam valores
function somar(n1,n2) {
	return n1 + n2;
}

document.write(somar(3,7));
document.write("<hr>")


//Passar um ARRAy para dentro de uma funcao

var numeros=new Array(10,2,5,30,25,19,20,50,40,150);

function media(nums) {
	var tam=nums.length;
	var soma1=0;
	for(var i=0;i<tam;i++) {
		soma1+=nums[i];
	}
	return Math.round(soma1 /tam);
}

document.write(media(numeros));