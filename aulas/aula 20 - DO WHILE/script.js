var num=5;
while(num<10){
	document.write("CFB Cursos<br>")
	num++;
}

document.write("<hr>")
do { //Garantia de execucao de pelo menos 1 vez dos comandos do bloco 
	document.write("CFB Cursos<br>")
	num++;

}while(num<10);

//O WHILE primeiro testa e depois faz os comandos, o DO WHILE faz os comandos e depois testa