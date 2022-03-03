function contar(n){
    let cont = 0
    for(let i = 0; i<n; i++){
        cont++
    }
    return cont
}

function contarT(n){
    let cont = 0
    let t=setTimeout(()=>{
        for(let i = 0; i<n; i++){
            cont++
        }

    },2000)
    
    return cont
}

function contarP(n){
    let cont = 0
    let p = new Promise((resolve,rejected)=>{//Parametros RESOLVE, REJECT
        for(let i = 0; i<n; i++){
            cont++
        }
        if(cont == n){
            resolve(cont)
        }else{
            rejected('ERRO')
        }
    })
    return p
}

function somaPositivos(n1,n2){
    let p = new Promise((res,rej)=>{
        if(n1>=0 && n2>=0){
            res(n1+n2)
        }else{
            rej('ERRO')
        }
    })
    return p
}

//Funcao assincrona
function contarPT(n){
    let cont = 0
    let p = new Promise((resolve,rejected)=>{//Parametros RESOLVE, REJECT
        let t=setTimeout(()=>{
            for(let i = 0; i<n; i++){
                cont++
            }
            if(cont == n){
                resolve(cont)
            }else{
                rejected('ERRO')
            }
        },2000)
        
    })
    return p
}

async function contarPTA(n){
    const r = await contarPT(n)
    console.log(r)
}

contarPT(10)
    .then(sucesso => console.log('Sucesso: ' + sucesso))
    .catch(erro => console.log(erro))

console.log(contar(10000))
contarP(10)
    .then(sucesso => console.log('Sucesso: ' + sucesso))
    .catch(erro => console.log(erro))

somaPositivos(10,2)
    .then(sucesso => console.log('Sucesso: ' + sucesso))
    .catch(erro => console.log(erro))

console.log(contarT(10))

contarPTA(10)






