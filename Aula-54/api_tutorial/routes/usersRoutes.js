const express = require("express");
const usersControllers = require("../controllers/usersControllers");
const router = express.Router();

// Importando o controller
const userControllers = require("../controllers/usersControllers");

// Banco de dados
const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];

// Obter todos os usuários
router.get("/", usersControllers.getAllUsers);

// Obter um usuário em específico
router.get("/:id", (req, res) => {
    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        res.status(404).json({ message: "User not found!" });
    }

    res.json(user);
});

// Criar um usuário
router.post("/", (req, res) => {
    const { id, name, email } = req.body;

    // Verificando se o e-mail já está cadastrado
    const userAlreadyExists = users.find(user => user.email === email);
    
    if (userAlreadyExists) {
        return res.status(409).json({ message: "User already exists" })
    }
    
    const user = { id, name, email };

    // Inserindo o usuário
    users.push({ id, name, email });

    res.status(201).json(user);
});

// Atualizar as informções de um usuário
router.put("/:id", (req, res) => {
    const { name } = req.body;
    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    user.name = name;

    res.json(user);
});

// Deletar um usuário
router.delete("/:id", (req, res) => {
    // Obter o id dos parâmetros
    const userIndice = req.params.id;

    // Verificar  se o usuário com aquele id existe
    const userIdIndDB = users.findIndex(user => user.id == userIndice);

    if (userIdIndDB < 0) {
        return res.status(404).json({ message: "User not found" })
    }

    // Remover o usuário do 
    users.splice(userIdIndDB, 1)

    res.status(204).end();
});


module.exports = router;