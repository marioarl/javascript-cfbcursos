var nota=21;
var res;
//Aprovado com louvor	>95
//Aprovado				>=60
//Recuperacao			>=40 && < 60
//Reprovado				<40	
//Reprovado com louvor	<20	 

if (nota >94) {
	res="Aprovado com louvor!!"
} else if (nota >= 60){
	res="Aprovado"
}else if ((nota>=40) &&(nota <60)) {
	res="Recuperacao"
}else if (nota >=20){
	res="Reprovado"
}else {
	res="Reprovado com louvor!!"
}

document.write(res);