const fsPromises = require("fs/promises");
const { EOL } = require("os");
const path = require("path");

async function getUserByName(name) {
    const data = (await fsPromises.readFile(path.resolve("users.json"))).toString("utf-8");    
    
    const users = JSON.parse(data);    
    
   const user = users.find(user => user.nome === name);

   return user;
}

(async () => {
   const user = await getUserByName("Pedro");
   
   if (user) {
       console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
   } else {
       console.log("Usuário não encontrado");
   }
})();