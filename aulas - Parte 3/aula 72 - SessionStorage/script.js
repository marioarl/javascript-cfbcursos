function pagina(pg){
    sessionStorage.nome=document.getElementById("fnome").value;
    if(pg==2){
        window.location.assign("p2.html");
    }else if (pg==3){
        window.location.assign("p3.html");
    }
    
}


function inicia(){
    document.getElementById("btnP2").addEventListener("click", function(){
        pagina(2)
    });
    document.getElementById("btnP3").addEventListener("click", function(){
        pagina(3)
    });

    document.getElementById("btnLimpar").addEventListener("click", function(){
        sessionStorage.clear();
    });
}

window.addEventListener("load", inicia);
