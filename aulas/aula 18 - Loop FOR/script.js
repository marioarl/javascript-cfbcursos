//                Comando FOR
// for (p1 ; p2 ; p3) {
//   	comandos;
//}

//p1 = Inicializacao do contador
//p2 = COndicao de execucao do loop
//p3 = Incremento ou decremento do contador

var cont;

for(cont=0; cont <10; cont++){ //pode-se criar a var dentro do for(var cont=0;cont<10; cont++), mas a variavel só valerá dentro do comando for, nao será possivel utiliza-la em outro lugar do codigo.
	document.write("CFB Cursos<br>");
}


//Usando FOR com ARRAYS

var num=[];

num.push(15);
num.push(8);
num.push(6);
num.push("Faca");
num.push("Peixe");

for(var cont2=0; cont2<5;cont2++) {
	document.write(num[cont2], "<br>")
}

//Atribuindo elementos no ARRAY utilizando o prompt
var num2=[];

for(var cont3=0; cont3<5;cont3++) {
	num2.push(prompt("Digite um numero"));//aparecera um prompt no Browser
}

for(var cont3=0; cont3<5;cont3++) {
	document.write(num2[cont3], "<br>")
}

//Aninhando o FOR

var mochila=[["Corda", 1], ["Cura", 10], ["Lanterna",1], ["Pilhas",20]]
	
	for(var l=0; l<4;l++) {
		for (var c=0; c<2; c++) {
			document.write(mochila[l][c], " ");
		}
		document.write("<br>")
	}

