const prompt = require("prompt-sync")()

let entrada = prompt("Digite um número inteiro: ");
let numero = parseInt(entrada);

if (isNaN(numero)) {
    console.log("Você não digitou um número válido.");
} else {
    let ehPrimo = true;

    if (numero <= 1) {
        ehPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }

    if (ehPrimo) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}