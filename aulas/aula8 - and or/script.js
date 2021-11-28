/* O operador AND (&&) só vai retornar verdadeiro quando todos os seus testes logicos forem VERDADEIROS.
TABELA VERDADE DO OPERADOR AND(&&)
Teste logico 1 			Teste logico 2		Resultado
		V					F					F
		F					V					F
		V					V					V
		F					F					F


O operador OU (||) só vai retornar falso quando todos os seus teste logicos forem FALSOS
TABELA VERDADE DO OPERADOR ou (||)
Teste logico 1 			Teste logico 2		Resultado
		V					F					V
		F					V					V
		V					V					V
		F					F					F
*/

var pontos = 100;
//vitoria =>   >=30 && <=40 || >=70 && <=80

if (
	
	((pontos>=30)&&(pontos<=40)) 
	|| 
	((pontos>=70)&&(pontos<=80))
	){
		document.write('Ganhou'); 

}else {
	document.write("Perdeu")
}
