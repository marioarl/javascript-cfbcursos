var diryJ, dirxJ



function teclaDw(event){
    var tecla = event.key;
    if(tecla == "ArrowLeft"){   
        dirxJ=-1; 
    
    }else if (tecla == "ArrowRight") {
        dirxJ = 1;

    }else if (tecla == "ArrowUp"){
        diryJ=-1;

    }else if (tecla == "ArrowDown"){
        diryJ =1;

    }else if (tecla == "Space"){
        //Atirar
    }
}

function teclaUp(event){
    var tecla = event.key;
    if((tecla == "ArrowLeft") || (tecla == "ArrowRight")){   
        dirxJ=0; 
    
    }else if ((tecla == "ArrowUp") || (tecla == "ArrowDown")){
        diryJ = 0;
    }
}
