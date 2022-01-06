document.getElementById("btnDestaque").addEventListener("click", function(){
    var num = document.getElementById("fnum").value;
    var p = document.getElementsByTagName("p");
    for(var i=0; i<p.length; i++){
        p[i].removeAttribute("style");//remove o valor do atributo
    }
    var at = document.createAttribute("style"); //Cria um atributo
    at.value="color:#f00; font-size: 1.5em";
    p[num].setAttributeNode(at);//Seleciona o atributo

})

