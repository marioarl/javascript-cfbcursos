var vcorf, vcort,vnome;

if (localStorage.nome){
    vcorf=localStorage.corf;
    vcort=localStorage.cort;
    vnome=localStorage.nome;
    defineCor(1,vcorf);
    defineCor(2,vcort);
    document.getElementById("painel").innerHTML="Bem vindo " +vnome+"<hr>";

}


function salvar(){
    var form = document.getElementById("fconf");
    vnome=document.getElementById("fnome").value;
    localStorage.corf=vcorf;
    localStorage.cort=vcort;
    localStorage.nome=vnome;
    form.style.display="none";
}

function defineCor(op,cor){
    if(op==1){
        document.body.style.backgroundColor=cor;
        vcorf=cor;
    }else{
        document.body.style.color=cor;
        vcort=cor;
    }
}

function mostraConf(){
    var form = document.getElementById("fconf");
    form.style.display="block";
}
