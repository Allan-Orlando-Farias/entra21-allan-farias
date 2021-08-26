const express = require("express");
const usersControllers = require("../controllers/usersControllers");
const router = express.Router();

// Importando o controller
const userControllers = require("../controllers/usersControllers");

// Obter todos os usuários
router.get("/", usersControllers.getAllUsers);

// Obter um usuário em específico
router.get("/:id", userControllers.getUserById);

// Criar um usuário
router.post("/", userControllers.createUser);

// Atualizar as informções de um usuário
router.put("/:id", userControllers.updateUser);

// Deletar um usuário
router.delete("/:id", userControllers.deleteUser);

module.exports = router;