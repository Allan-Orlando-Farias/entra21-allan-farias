const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer")
const usersControllers = require("../controllers/usersControllers");

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

// Criar um post para um usuário
router.post("/:id/posts", multer(multerConfig).single("image"), userControllers.createPost)

module.exports = router;