const prompt = require('prompt-sync')()

const n = prompt('Display odd numbers till: ')
// console.log(`Odd numbers till ${n}`)
let odd = []

for(i=0; i<=n; i++){
    if(i%2) odd.push(i);
}

console.log(`Odd numbers: ${odd}`)