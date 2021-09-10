/*let num = [5, 8, 2, 9, 3, 24]
console.log(num)

num.push(25)
num.push(15)
console.log(num)

num.sort()
console.log(num)

console.log(`O vetor tem ${num.length} posições, o menor valor é ${num[0]} e o maior valor é 
${num[num.length - 1]}`)*/

let vet = []

for(c = 0; c <= 25; c++){
    vet.push(Math.floor(Math.random() * (200 - (-50))) +(-50));
}

console.log(vet)
vet.sort(function(a, b){return a-b})
console.log(vet)