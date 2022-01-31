let soma = function(...num){
    let res = 0
    for(n of num){
        res += n
    }
    return res
}

let s=soma

console.log(s(2,3,6,7))
console.log(s(2,3,6,))
console.log(s(2,3))