function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c    
    }

    return fat
}

let num = 10
console.log(fatorial(num))
