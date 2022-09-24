const prompt = require('prompt-sync')()

const n = prompt(`Display even numbers till: `)
// console.log(`Even numbers till ${n}`)
let even = []

for(i=0; i<=n; i++){
    if(i%2) even.push(i);
}

console.log(`Even numbers: ${even}`)