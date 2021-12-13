//Recursividade é quando temos uma função que em algum momento ela chama a si propria. Pode-se utlizar a recursividade para subistituir rotinas de LOOP(while, for, dowhile). A grande vantagem é que o código fica menor e isso implica em mais facilidade de entendimento do programa.

//Contador

function contador(min,max){
	document.write(min +"<br>");
	if(min < max){
		contador(++min, max)
	}
}

contador(0,10);

//Fatorial
function fatorial(n){
	if(n == 1){
		return 1;
	}
	return n *(fatorial(n-1));
}
document.write(fatorial(4))