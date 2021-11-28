// Array é uma coleçao de variaveis.
//O metodo PUSH é uma das formas de inser um novo elemento no final do ARRAY

//var cor=new Array(); //declarar um Array
//var cor=[]; //Podemos tambem declarar desta maneira

//cor.push("Preto"); //Inserindo elementos dentro do array com o metodo PUSH
//cor.push("Branco");
//cor.push("Vermelho");
//cor.push("Verde");
//cor.push("Azul");

//document.write(cor[0]);

//Existe tambem uma outra forma, mais antiga, que consiste em chamar a variavel e atribuir valor no indice. POde tambem inlcuir o comando PUSH com esse metodo abaixo.

//cor[0]=("Preto");
//cor[1]=("Branco");
//cor[2]=("Vermelho");
//cor[3]=("Verde");
//cor[4]=("Azul");
//cor.push("Rosa");


//Exemplo em um jogo
var itens=["Faca", "Pederneiras", "Corda","Lanterna", "Luvas", "Chave", "Arame"];
var mochila=[];

//mochila.push(itens[4]);
//document.write(mochila[0])

mochila.push(2);
mochila.push(0);
mochila.push(3);

document.write(itens[mochila[0]]+"<br>");
document.write(itens[mochila[1]]+"<br>")
document.write(itens[mochila[2]]+"<br>")
