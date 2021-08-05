const fsPromises = require("fs/promises");
const { EOL } = require("os");
const path = require("path");
const chalk = require('chalk');

(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const nomes = data.toString("utf-8").split(EOL)

        let nomeComA = nomes.filter(nome => nome[0].toLocaleUpperCase() === "A")
        let nomeComD = nomes.filter(nome => nome[0].toLocaleUpperCase() === "D")
        let nomeComC = nomes.filter(nome => nome[0].toLocaleUpperCase() === "C")

        console.log(chalk.red(nomeComA, EOL))
        console.log(chalk.blue(nomeComC, EOL))
        console.log(chalk.magenta(nomeComD))

    } catch (err) {
        console.log(err.message);
    }
})();

// mostrar os nomes que começam com a letra A em vermelho, os nomes que começam com a letra C em azul e os
// nomes que começam com a letra D em magenta.