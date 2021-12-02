//Estrutura basica do try catch
//Coloca-se a rotina a ser testada dentro do CATCH e caso aconteça o erro queremos tratar esse erro.
//Quando acontece o erro é gerado uma excesao que é passada para dentro do CATCH.
// O TRY é interrompido automaticamente

try {
	document.writei("CFB Cursos")//WRITE escito incorreto, por isso o bloco CATCH será executado
}catch(e){
	document.write("ERRO " + e.message); //Aparece na tela o erro
	console.log("Mensagem de erro: " + e.message)//este log de erro nao é explicito para o usuario, somente no inspecionar do CHROME
}

//Alguns erros sao tratados internamente, entao nao gera um excessao, por exemplo divisao por zero

var num;

try {
	num=10/0; //Esse caso é tratado internamente, entao o erro será mostrado no resultado da variavel
	document.write("<br> ERRO: " + num);

}catch(e){
	document.write("ERRO " + e.message); //Neste caso o CATCH nao tem efeito
}

//Alguns casos precisamos gerar um erro manualmente.
//Exemplo: Temos a variavel num1 que nao pode receber um numero maior que 10

var num1; //Maximo 10

try {
	num1=prompt("Digite um valor");
	if(num1>10) {
		throw new Error("Valor invalido, o valor deve ser menor ou igual a 10"); //Criando um ERROR manualmente
	}	
	document.write("<br>Valor: ", num1);
}catch(e){
	document.write("<br>ERRO: " + e.message);
}finally {
	document.write("<br>FIM do tratamento")//Será executado quando ocorrendo o ERRO ou nao
}


