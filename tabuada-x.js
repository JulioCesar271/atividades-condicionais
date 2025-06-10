const prompt = require('prompt-sync')();
let n = parseInt(prompt("Digite um número: "));

if(n>0){
    console.log("Tabuada de multiplicação do " + n)
for(let i = 1; i<=10;i++ ){
    console.log(n + "X" + i + "=" +(n * i));
 }
}else{
    console.log("Digite um número inteiro !positivo!")
}