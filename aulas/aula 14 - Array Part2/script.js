// Metodos SHIFT,UNSHIFT,POP  e SPLICE
//Metodo UNSHIFT ==> Insere elementos no inicio do ARRAY
//Metodo POP ==> Remove elementos do final do ARRAY
//Metodo SHIFT==> Remove elementos do inicio do ARRAY
//Metodo SPLICE==> Remove elementos de qualquer posicao do ARRAY

var mochila=[];

mochila.push("Faca");
mochila.push("Corda");
mochila.push("Pedeneira");
mochila.push("Chave");
mochila.push("Lanterna");
mochila.unshift("Pedra");// insere o item no inicio do ARRAY

mochila.pop();//remove o ultimo elemento do ARRAY

mochila.shift(); //remove o primeiro elemento do ARRAY

mochila.splice(2, 1)// Remove elementos de qualquer lugar do ARRAY, onde o 1o. parametro é o indice do array e o 2o. parametro é a quantidade de elementos a serem removidos

document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");
document.write(mochila[4]+"<br>");
document.write(mochila[5]+"<br>");