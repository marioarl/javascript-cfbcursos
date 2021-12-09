 //Math é uma biblioteca disponivel com varios métodos e constantes disponiveis para facilitar nosso trabalho com matematica.

 //CONSTANTES
 document.write("Diretamente no document.write ==>", Math.PI , "<br>"); //se nao quiser armarzenar em uma var, pode-se utilizar diretamente no document.write

 //Armazenando em uma const

 const mt=Math.PI;
 document.write("Na const criada mt ==>", mt, "<br>");

 //Numero de Euler
 document.write("Diretamente no document.write ==>", Math.E , "<br>");

 //Raiz quadrada de 2
 document.write("Diretamente no document.write ==>", Math.SQRT2 , "<br>");


 //METODOS

 //Valor absoluto
 var valor=-10;
 var mt1=Math.abs(valor);

 document.write("Valor absoluto==>", mt1, "<br>");

 //METODOS PARA ARREDONDAMENTO

 //Arredondar para cima
 var valor= 10.3;
 var mt1=Math.ceil(valor);

 document.write("Arredondar para cima==>", mt1, "<br>");

 //Arredondar para baixo
 var valor= 10.8;
 var mt1=Math.floor(valor);

 document.write("Arredondar para baixo==>", mt1, "<br>");


 //Arredondamento padrao(se < 0.5 arredonda para baixo se >=0.5 arredonda para cima)
 var valor= 10.5;
 var mt1=Math.round(valor);

 document.write("Arredondamento padrao==>", mt1, "<br>");

 //METODO para elevar um numero a outro numero
 var valor= 4;
 var mt1=Math.pow(valor,2);

 document.write("Elevar um numero a outro (ex: 4²)==>", mt1, "<br>");

 //Raiz Quadrada
 var valor= 81;
 var mt1=Math.sqrt(valor);

 document.write("Raiz Quadrada (ex 81)==>", mt1, "<br>");


 //Retornar um valor aleatorio entre 0 e 1
 var mt1=Math.random();

 document.write("Numero aleatorio entre 0 e 1==>", mt1, "<br>"); 


 //Retornar um valor aleatorio entre 0 e qualquer numero informado
 var valor = 10; 
 var mt1=Math.random() * valor; //Multiplicar pela variavel, ou pode-se colocar o valor direto nesta funcao

 document.write("Numero aleatorio entre 0 e 10==>", mt1, "<br>"); 


 //Retornar um valor aleatorio entre 0 e qualquer numero informado com o numero inteiro
 var valor = 10; 
 var mt1=Math.round(Math.random() * valor); //Multiplicar pela variavel, ou pode-se colocar o valor direto nesta funcao

 document.write("Numero aleatorio entre 0 e 10(int)==>", mt1, "<br>"); 


 //Gerando 6 numeros aleatorios entre 1 e 60
 var valor=59;
 document.write("Numeros de 1 a 60 aleatorios==> ")
 for (var i=1;i<=6;i++){
	 document.write(Math.round((Math.random()*valor)+1) + " - ")
 }
 document.write("<br>")
 


 //SENO e COSSENO de um angulo

 var angulo=90;

 var c=Math.cos(angulo * Math.PI/180);//O metodo recebe o angulo em RADIANOS e retorna em graus, precisamos passar o valor em radianos 
 
 var s=Math.sin(angulo * Math.PI/180);

 document.write("Angulo: ", angulo, "<br>", "Cosseno: ", c, "<br> Seno: ", s, "<br>")


 //Retornar o maior valor e o menor valor de uma sequencia

 var maior=Math.max(1, 2, 3, 4, 5, 6, 7, 8);
 var menor=Math.min(1,2,3,4,5,6,7,8)
 document.write("Maior valor entre 1 e 8==> ", maior, "<br>")
 document.write("Menor valor entre 1 e 8==> ", menor)


