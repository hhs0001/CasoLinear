const term = require('terminal-kit').terminal;
metodos = require('./metodos')
const prompt = require("prompt-sync")();
console.clear();
term.cyan('Seja bem-vindo(a) ao propragrama para solucionar \n');
term.cyan('A função ajustadora\n');
term.green('Selecione seu método:\n');
const itens1 = [`a. Método Linear`, `b. Método Mínimos quadrados`]
term.singleColumnMenu(itens1 , function( error , response ) {
	if(response.selectedIndex === 0){
        console.clear();
        let valoresX = prompt("Digite os valores de X separados por ; ")
        valoresX = splitString(valoresX, ";")
        let valoresY = prompt("Digite os valores de Y separados por ; ")
        valoresY = splitString(valoresY, ";")
        for (let index = 0; index < valoresX.length; index++) {
            valoresX[index] = Number(valoresX[index])
            valoresY[index] = Number(valoresY[index])
        }
        let solucao = metodos.metodoLinear(valoresX, valoresY)
        console.log(`A equação é:\nY = ${solucao.n} + (${solucao.m}X)`)
        process.exit()
    } else if(response.selectedIndex === 1){
        console.clear();
        let valoresX = prompt("Digite os valores de X separados por ; ")
        valoresX = splitString(valoresX, ";")
        let valoresY = prompt("Digite os valores de Y separados por ; ")
        valoresY = splitString(valoresY, ";")
        for (let index = 0; index < valoresX.length; index++) {
            valoresX[index] = Number(valoresX[index])
            valoresY[index] = Number(valoresY[index])
        }
        let solucao = metodos.MMQ(valoresX, valoresY)
        console.log(`Valores da solução para X: ${solucao[0]}\n`)
        console.log(`Valores da solução para Y: ${solucao[1]}\n`)
        process.exit()
    }
});

function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings
}