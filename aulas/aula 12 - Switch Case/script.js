
var pos, msg, pontos;

pontos=333;

if(pontos >= 1000)
	pos=1;
else if (pontos >=800)
	pos=2;
else if (pontos >=600)
	pos=3;
else
	pos=0;

switch(pos) {
	case 1:
		msg="Primeiro Lugar<br>Medalha de Ouro";
		break;
	case 2:
		msg="Segundo Lugar<br>Medalha de Prata";
		break;
	case 3:
		msg="Terceiro Lugar<br>Medalha de Bronze";
		break;
	default:
		msg="Não foi ao pódio!!!"
}

switch(pos) {
	case 1:
	case 2:
	case 3:
		msg+="<br>Subiu ao pódio";
		break;
	default:
		msg+="<br>Nao Obteve colocacao"
}


document.write(msg);

//Quando utilizar o IF e o SWITCH?
// O IF é utilizado quando nao sabemos o valor da váriavel.
//O SWITCH vamos utilizar quando sabemos os valores que poderao estar na variavel.

