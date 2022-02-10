/*
POO - É um paradigma de desenvolvimento de software que procura seguir o mundo real , tenta imitar uma modelagem de acordo com o mundo real. Ela considera o programa como uma colecao de objetos, que podem ou nao se comunicar entre si, atraves de metodos e propriedades desses objetos.

As classes sao os esqueletos, sao os projetos do objetos.
*/

//Criando uma classe
class Carro{
    /*
    Atributos da classe: sao as propriedades, variaveis que aplicamos em uma classe(nao é necessario inicar com let, var ou const).Pode ser criado denrto do metodo construtor ou fora dele. Ultimamente os programadores dao preferencia por criar os atributos dentro do construtor

    METODO CONSTRUTOR
    Nos padroes de linguagem de programacao, é o metodo que tem o mesmo nome da classe, mas em JS o metodo construtor deve ser definido como constructor().
    O construtor será automaticamente chamado quando instanciar um objeto dessa classe e executa os comandos dentro do constructor
    */ 
    constructor(c){
        this.cor1="Vermelho" //Criando um atributo
        this.cor=c
        console.log("Ola sou um novo carro: " + this.cor)
    }

}

//Instanciar objetos da classe Carro
let c1 = new Carro("Vermelho")
let c2 = new Carro("Azul")
let c3 = new Carro("Verde")
let c4 = new Carro("Amarelo")
