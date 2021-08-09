const fsp = require("fs/promises");
const path = require("path");
const { EOL } = require("os");
const chalk = require("chalk");

(async () => {
    try {
        const data = await fsp.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        
        const nomes = data.toString("utf-8").split(EOL);

        for (let nome of nomes) {
            switch(nome[0]) {
                case "A":
                    console.log(chalk.red(nome));
                    break;
                case "C":
                    console.log(chalk.blue(nome));
                    break;
                case "D":
                    console.log(chalk.magenta(nome));
                default:
                    console.log(nome);
            }
        }
        // const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
        // const nomesComC = nomes.filter(nome => nome[0].toUpperCase() === "C"); 
        // const nomesComD = nomes.filter(nome => nome[0].toUpperCase() === "D"); 
        
        // console.log(chalk.red(nomesComA));
        // console.log(chalk.blue(nomesComC));
        // console.log(chalk.magenta(nomesComD));
    } catch (err) {
        console.log(err.message);
    }
})();