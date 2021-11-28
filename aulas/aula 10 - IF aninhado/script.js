var nota=50;
var res;
//Aprovado com louvor	>=95
//Aprovado				>=60
//Recuperacao			>=40 && < 60
//Reprovado				<40	
//Reprovado com louvor	<20	 

if (nota>=60) {
	if (nota>=95) {
		res="Aprovado com louvor!"
	}else {
		res="aprovado"
	}
} else if(nota >=40) {
	res="Recuperacao"

} else {
	if (nota >=20) {
		res="Reprovado"
	} else {
		res="Reprovado com louvor!"
	}
}

document.write(res);