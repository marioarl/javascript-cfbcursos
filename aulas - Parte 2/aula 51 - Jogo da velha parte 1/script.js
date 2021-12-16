var jogo = [];//guardar as posicoes
var tabuleiro = []; // que vai controlar os elementos no browser
var quemJoga = 0; //0 = jogador 1 = cpu
var verifica; //Armazena se houve vencedor ou nao
var jogando = true; //Verifica se o jogo está acontecendo ou nao
var nivel = 1; //Nivel do jogo
var jogadaCpu = 1 //Armazena a jogada da CPU
var quemComeca = 1; // Inicialmente ficara como 1(cpu)

function jogar(p){
	if((jogando)&&(quemJoga==0)){
		switch(p){
			case 1: 
				if(jogo[0][0] == ""){
					jogo[0][0] = "X";
					quemJoga=1;
				}
			break;

		}

	}
}

function inicia(){
	jogando = true;
	jogadaCpu = 1;
	jogo = [
		["", "", ""],//Corresponde a 1a. linha do jogo da velha
		["", "", ""],//Corresponde a 2a. linha do jogo da velha
		["", "", ""]//Corresponde a 2a. linha do jogo da velha
	];


}

window.addEventListener("load", inicia)