import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q + ' ', a => rs(a)))

let cont = 0
let media = 0
let soma = 0

while(true){
    let x = await question('Digite um número: ')
    if (x == 'n') break

    let notas = parseFloat(x)

    cont++
    soma = soma + notas
}

media = soma / cont
console.log("Média = ", media)
process.exit()
