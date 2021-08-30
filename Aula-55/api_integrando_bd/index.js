const { request, response, json } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

// Importando as rotas
const usersRoutes = require("./routes/usersRoutes");

// Definindo os middlewares
app.use(express.json());


// Definindo as rotas
app.use("/users", usersRoutes);

// Rotas da raíz
app.get("/", (request, response) => {
    response.send("Olá, Mundo!");
});

app.post("/", (request, response) => {
    response.send("Método POST");
});

app.put("/", (request, response) => {
    response.send("Método PUT");
});

app.delete("/", (request, response) => {
    response.send("Método DELETE");
});

// Banco de dados
const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];

app.listen(PORT, () => console.log("O servidor está rodando..."));