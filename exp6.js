const prompt = require('prompt-sync')();
let n = []

for(let i = 0; i<5;i++ ){
    n[i] = parseInt(prompt("Digite seu número: "))
} 
let maior = Math.max(...n)
console.log("O maior é "+ maior)