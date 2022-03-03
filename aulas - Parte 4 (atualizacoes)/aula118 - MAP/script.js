let num = [1,4,9,16,25]
let raiz = num.map(Math.sqrt)

for(let i =0; i<5; i++){
    console.log("Numero: " + num[i] + " - Raiz: " + raiz[i])
}    

let dobro = num.map((n)=>{
    return n*2
})

for(let i =0; i<5; i++){
    console.log("Numero: " + num[i] + " - Dobro: " + dobro[i])
}  