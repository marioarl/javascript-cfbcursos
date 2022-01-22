function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira; //Se o cookie nao tiver data que expira, o navegador irá excluir esse cookie
    document.cookie = nome + "=" + valor + "; " + dtExpira; 
}

function lerCookie(nome){
    var vnome = nome + "=";
    var ca = document.cookie.split(';');//O navegador armazena todos os nomes dos cookies separados por ponto e virgula (;).
    for(var i =0; i<ca.length; i++){
        var c = ca[i];
        while (c.charAt(0)== ' '){
            c = c.substring(1);
        }
        if (c.indexOf(vnome) == 0) 
            return c.substring(vnome.length, c.length);
    }
    return "";
}

function verificarCookie(){
    var username = lerCookie("username");
    if (username!=""){
        alert("Bem vindo novamente " + username);
    }else {
        username = prompt("Digite seu nome:", "");
        if (username != "" && username != null){
            criarCookie("username", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
}

//Para limpar o COOKIE, na pagina pressione F12 ou Inspecionar, na aba Aplicativo á esqueda na parte de Armazenamento selecione Cookies e com o mouse utilize o botao direito e EXCLUIR

