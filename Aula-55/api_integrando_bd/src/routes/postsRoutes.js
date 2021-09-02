const express = require("express");
const router = express.Router();

// Importando o controller
const postsControllers = require("../controllers/postsControllers");

// Atualizar os posts de um usuário
router.put("/:id", postsControllers.updatePost);

// Remover um post
router.delete("/:id", postsControllers.deletePost);

module.exports = router;