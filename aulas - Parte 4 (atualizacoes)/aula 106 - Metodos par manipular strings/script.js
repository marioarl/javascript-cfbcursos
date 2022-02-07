let curso = "Curso de Javascript moderno"
let p="Curso"
console.log("Imprimindo a posicao 0 da string")
console.log(curso[0])
console.log("-------------------------------------")

console.log("Imprimindo a posicao 3 da string")
console.log(curso[3])
console.log("-------------------------------------")

console.log("Metodo startsWith - retorna true caso a string COMECE com o valor indicado")
console.log("Começa com Curso?")
console.log(curso.startsWith("Curso"))

console.log("-------------------------------------")
console.log("Começa com CFB?")
console.log(curso.startsWith("CFB"))
console.log("-------------------------------------")
console.log("Começa com C?")
console.log(curso.startsWith("C"))
console.log("-------------------------------------")

console.log("Utilizando operacao ternaria para modificar a saida true ou false?")
console.log(curso.startsWith(p) ? "Verdadeiro" : "Falso") //Com uma operacao ternaria

console.log("-------------------------------------")
console.log("Metodo endsWith - retorna true caso a string TERMINE com o valor indicado")
console.log("termina com moderno?")
console.log(curso.endsWith("moderno"))

console.log("-------------------------------------")
console.log("Metodo includes - conseguimos verificar em qualquer lugar da string se possue a senteca que indicar")
console.log("Existe a palavra de?")
console.log(curso.includes("de"))

console.log("-------------------------------------")
console.log("Existe a palavra do?")
console.log(curso.includes("do"))

console.log("-------------------------------------")
console.log("Existe a palavra Java?")
console.log(curso.includes("Java"))

console.log("-------------------------------------")
console.log("Metodo repeat - repete a string uma determinado numero de vezes")
console.log("Repetir a string 2x")
console.log(curso.repeat(2))
