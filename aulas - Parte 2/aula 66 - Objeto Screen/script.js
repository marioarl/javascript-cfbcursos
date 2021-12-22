//O metodo screen vai disponibilizar informacoes sobre a tela, sobre a configuracao de resolucao da tela. 

var painel;

function inicia(){
	painel = document.getElementById("painel");
	painel.innerHTML+= "largura da tela:" + screen.width + "px<hr>"//largura da tela
	
	painel.innerHTML+= "Altura da tela:" + screen.height + "px<hr>"//altura da tela

	painel.innerHTML+= "largura da tela disponivel:" + screen.availWidth + "px<hr>"//largura da tela

	painel.innerHTML+= "Altura da tela disponivel:" + screen.availHeight + "px<hr>"//Altura da tela

	painel.innerHTML+= "Profundidade de cores:" + screen.colorDepth + "bits<hr>"//largura da tela
	
	painel.innerHTML+= "Resolucao de cores da tela (pixel):" + screen.pixelDepth + " bits/pixel<hr>"//largura da tela

}

window.addEventListener("load", inicia)