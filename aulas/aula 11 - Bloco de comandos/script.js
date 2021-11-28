// O uso das chaves é obrigatorio quando queremos delimitar um bloco maior do que 1 instrucao dentro do bloco. Neste caso
//a instrucao IF e ELSE tem somente 1 bloco de instrucao dentro, entao nao é necessaria as chaves {}
var num=12;

if(num > 10) 
	res="Maior que 10";
else
	res="Menor que 10";

document.write(res, "<br>")


// O comando IF pode ser resumido em 2 linhas
if(num > 10) res="Maior que 10";
else res="Menor que 10"

document.write(res, " <strong>(Simplificado)</strong>", "<br>")


//Quando há a necessidade de utilizar mais de 1 comando por bloco, precisamos delimitar com as chaves {}
if(num > 10)
{
	res="Maior que 10";
	document.write(res, "<strong>(Mais de 1 comando por bloco)</strong>");
	alert(res);
}
else
{
	res="Menor que 10";
	document.write(res, "<strong>(Mais de 1 comando por bloco)</strong>");
	alert(res);
}





