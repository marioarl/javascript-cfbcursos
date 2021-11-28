//INDEX.OF pesquisar se um elemento está dentro da ARRAY
//SORT ordenacao do ARRAY
//REVERSE inverte a ordem dos elementos do ARRAY
//CONCAT JUnta 2 arrays em um ARRAY
//JOIN junta todos os elementos de uma ARRAY em uma variavel em forma de STRING separado por virgula

//Propriedade LENGHT que retorna o tamanho de um ARRAY

var mochila=[],mochila2=[], mochilaT=[], pos;



mochila.push("Faca");
mochila.push("Corda");
mochila.push("Pedeneira");
mochila.push("Chave");
mochila.push("Lanterna");
mochila.push("Pedra");



mochila2.push("Arame");
mochila2.push("Luvas");
mochila2.push("Joelheira");
mochila2.push("Meias");
mochila2.push("Moeda");
mochila2.push("Canivete");

//document.write(mochila.indexOf("Lanterna"),"<br>");
//document.write(mochila.indexOf("Arame"),"<br>");//Quando não há o elemento dentro do ARRAY, retornará -1

//Utilizando o IF para deixar mais amigavel as respostas

pos=mochila.indexOf("Peixe");

if(pos <0) {
	document.write("Item nao está na mochila", "<br>")
} else {
	document.write("Item está na mochina<br><strong>Posicao: </strong>", pos);
}


//SORT, RVERESE , JOIN
var num=[5,8,4,9,7,6,3,0,2,1,];
var numeros;

num.sort(); //Ordena os numeros dentro do ARRAY
num.reverse(); //Coloca a ARRAY em ordem DECRESCENTE

numeros=num.join();
document.write(numeros, "<br>")//Junta todos os numeros do ARRAY num em uma variavel numeros separado por virgula

document.write(num[0], "<br>");
document.write(num[1], "<br>");
document.write(num[2], "<br>");
document.write(num[3], "<br>");
document.write(num[4], "<br>");
document.write(num[5], "<br>");
document.write(num[6], "<br>");
document.write(num[7], "<br>");
document.write(num[8], "<br>");
document.write(num[9], "<br>");

//Adicionando os itens da mochila com mochila2 em mochilaT

mochilaT=mochila.concat(mochila2);
document.write(mochilaT, "<br>")
document.write("Tamanho da mochila 1: ", mochila.length, "<br>")
document.write("Tamanho da mochila 2: ", mochila.length, "<br>")
document.write("Tamanho da mochila T: ", mochilaT.length)