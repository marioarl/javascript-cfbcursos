//Imprimir data e hora completa
document.write(Date())
document.write("<br>")

//Manipulando o metodo Date()

var dt=new Date();
/*Metodos da data
Metodo				Descricao
getDay();			Retorna o dia da semana, domingo=0, segunda=1
getDate();			Retorna o dia do mes
getMonth();			Retorna o mes, janeiro=0, fevereiro=1
getFullYear();		Retorna o ano com 4 digitos, ex: 2021
getHours();			Retorna a hora
getMinutes();		Retorna os minutos
getSeconds();		Retorna os segundos
toDateString();		Retorna a data por estencial, padra EUA
toLocaleDateString;	Retorna a data no formato 16/12/2015
toLocaleString();	Retorna a data e a hora 16/12/2015 23:13:00
*/
var dia=dt.getDate();
var mes=dt.getMonth();
var ano=dt.getUTCFullYear();
var diasem=dt.getDay();
document.write(diasem + ", "+ dia + " de " + mes + " de " + ano);
document.write("<br>")

//Colocando a data em estencil com ARRAYS

var meses=new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
var semanas=new Array("Domingo","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado")
document.write(semanas[diasem] + ", "+ dia + " de " + meses[mes] + " de " + ano);

//Colocando hora

var horas=dt.getHours();
var minutos=dt.getMinutes();
var segundos=dt.getSeconds();

document.write("<br>")
document.write(horas + ":" + minutos + ":" + segundos + "<br>")

//Trabalhar com Horas ou datas (aumentar ou diminuir)
//Gambiarra 1: colocar a quantidade que voce deseja diminuir ou aumentar nas variaveis diasem e mes (ex: +2)

//Gambiarra 2: criar uma variavel tmp e adicionar a quantidade nesta variavel e soma-la nas variaveis mes e diasem

//Solucao mais elegante
var ndt=new Date();

ndt.setDate(dt.getDate()+2);

//Ao invez de colocar var diasem = dt.getDay(); colocar diasem = ndt.getday()

