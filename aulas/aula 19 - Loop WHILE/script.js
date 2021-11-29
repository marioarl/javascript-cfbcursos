//Comparando com o Loop FOR
// for(p1; p2; p3) {
// 		bloco
// }

//p1;
//while(p2) {
//	p3;
//}

//WHILE é usado quando nao sabemos o numero de iteracoes

var num;
num=0
while(num<10) {
	document.write(num, "<br>");
	num++;
}

document.write("<hr>")

var num2;
num2=10
while(num2--) {
	document.write(num2, "<br>");
}
document.write("<hr>")


var num3;
var cont;
num3=true;
cont=0;
while(num3) {
	document.write(num3, "<br>");
	cont++;
	if (cont>9) {
		num3=false;
	}
}
