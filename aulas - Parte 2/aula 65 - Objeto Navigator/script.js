var painel;

function localizar(pos){
	var c = pos.coords;
	painel.innerHTML+="<hr>Lat: " + c.latitude + " - Lon: " + c.longitude;

}

function verifica(){
	painel=document.getElementById("painel");
	painel.innerHTML="<strong>Nome do Browser:</strong> " + navigator.appName + "<br>"//retorna o nome do browser. O navigator.appname está obsoleto e nao é mais recomendado. Esta propriedade sempre retorna "NETSCAPE" 

	painel.innerHTML+="<hr><strong>Versao do Browser:</strong>" + navigator.appVersion + "<br>"//retorna a versao do Browser. O navigator.appVersion está obsoleto e nao é mais recomendado.

	painel.innerHTML+="<hr><strong>Cookies(true - habilitado , false - desabilitado):</strong>" + navigator.cookieEnabled + "<br>"//retorna se os cookies estao habilitados.

	painel.innerHTML+="<hr><strong>Localizacao geografica:</strong>" + navigator.geolocation.getCurrentPosition(localizar) + "<br>"//retorna a geolocalizacao. O getCurrentPosition chama uma funcao que devemos criar onde o 1o. parametro - se houve sucesso na geolocalizacao, 2o. parametro - caso houver algum erro no 1o. parametro, 3o parametro - parametros de geolocalizacao como precisao...

	painel.innerHTML+="<hr><strong>Idioma: </strong>" + navigator.language + "<br>"//Retorna o idioma do browser

	painel.innerHTML+="<hr><strong>OnLine: </strong>" + navigator.onLine + "<br>"//retorna se o browser está online ou nao

	painel.innerHTML+="<hr><strong>Sistema Operacional: </strong>" + navigator.platform + "<br> <hr>"//retorna o sistema operacional na qual o navegador está rodando. O navigator.platform está obsoleto e nao deve ser utilizado

	painel.innerHTML+="<strong>Engine do Browser: </strong>" + navigator.product + "<br>"//retorna qual a Engine do browser. O navigator.product está OBSOLETO e nao deve ser utilizado. Todos os navegadores retornam "Gecko".

	painel.innerHTML+="<hr><strong>Agente: </strong>" + navigator.userAgent + "<br>"//retorna qual o agente foi enviado para o browser pelo servidor .






}

window.addEventListener("load", verifica);