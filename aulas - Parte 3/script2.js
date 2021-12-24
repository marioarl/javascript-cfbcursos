var aux = location.hash;
var dados = aux.split("#")
var v1 = dados[1];
var v2=dados[2];
document.write("<hr>" + v1);
document.write("<hr>" + v2);
var h=location.hostname;

document.write("<hr>")
document.write(h)

document.write("<hr>")
var g=location.href
document.write(g)

document.write("<hr>")
var o=location.origin //Mostrará o protocolo(http://) o hostname e a porta
document.write(o)

document.write("<hr>")
var p=location.pathname //Caminho apos o protocolo e o hostnamne
document.write(p)

document.write("<hr>")
var i=location.port //Numero da porta
document.write(i)

document.write("<hr>")
var pr=location.protocol //protocolo 
document.write(pr)

document.write("<hr>")
var sr=location.search //protocolo 
document.write(sr)