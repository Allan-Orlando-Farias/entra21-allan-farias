const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");
const os = require("os");

setInterval(() => {
    (async () => {
        let freeMemoryInBytes = os.freemem(),
            totalMemoryInBytes = os.totalmem(),
            freeMemoryInMB = parseInt(freeMemoryInBytes / 1024 / 1024).toString(),
            totalMemoryInMB = parseInt(totalMemoryInBytes / 1024 / 1024).toString(),
            // totalUsoMemoria = 
        
        try {
            await fsPromises.appendFile(path.resolve(__dirname, "log.txt"), `Memória livre: ${freeMemoryInMB}MB\nMemória Total: ${totalMemoryInMB}MB\nUso da memória: ${totalUsoMemoria}%\n`);
            
            console.log("Novo conteúdo adicionado (Promise)");
        } catch(err) {
            console.log(err.message);
        }
        })();
}, 1000);