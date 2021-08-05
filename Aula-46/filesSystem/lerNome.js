const fsPromises = require("fs/promises");
const { EOL } = require("os");
const path = require("path");

(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const nomes = data.toString("utf-8").split(EOL)
        
        console.log(nomes.filter(nome => nome[0].toLocaleUpperCase() === "A")) 
    } catch (err) {
        console.log(err.message);
    }
})();