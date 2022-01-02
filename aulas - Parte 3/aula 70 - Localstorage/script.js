
//Criar uma chave
//localStorage.setItem("canal", "CFBCursos");

//Remover uma chave
//localStorage.removeItem("canal")


//Obter o valor de uma chave e colocar em uma variavel
//var vcanal=localStorage.getItem("canal");
//document.write(vcanal);


//Outra maneira de se obter o valor da chave
//var vcanal=localStorage.canal; //Utilizando o nome da chave no localStorage
//document.write(vcanal);


//Verificar se o browser suporta o webstorage
//if(typeof(Storage)!="undefined"){
    //localStorage.setItem("canal", "CFBCursos");

    //var vcanal=localStorage.canal;
    //document.write(vcanal);
//} else{
    //document.write("Sem suporte a web Storage")
//}

//Quantidade de visitas no site
if(localStorage.visitas){
    localStorage.visitas = Number(localStorage.visitas) + 1;

}else{
    localStorage.visitas = 1;
}

document.write("Visitas: " + localStorage.visitas);


