import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q + ' ', a => rs(a)))

const color = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};


let cont = 0
let media = 0
let soma = 0

while(true){
    let x = await question('\u001b[32mDigite um número: ')

    if (x.toLowerCase() == 'n') break
    // else if (x < 0 || x > 10){
    //     let x = await question('ERRO, Digite um número de 0 a 10: ')
    //     x -= x
    // }

    if(isNaN(x)){
        console.log(color.fg.red + "[ ERRO ] escreva N ou n para finalizar." + color.reset)
        continue
    }

    let nota = parseFloat(x)

    if (nota < 0 || nota > 10) {
        console.log(color.fg.red + "[ ERRO ] escreva uma nota de 0 a 10." + color.reset)
        continue
    }

    cont++
    soma += nota
}

media = soma / cont
console.log("\u001b[33mMédia = ", media)
process.exit()
