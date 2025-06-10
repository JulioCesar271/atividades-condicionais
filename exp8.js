const prompt = require("prompt-sync")();

let n = [];
let loop = true

while(loop){
    let entrada = parseInt(prompt("Digite seus números: "))
    if(entrada === 0){
        loop = false
    }else{
        n.push(entrada)
    }
}
console.log("Números digitados: ", n)
