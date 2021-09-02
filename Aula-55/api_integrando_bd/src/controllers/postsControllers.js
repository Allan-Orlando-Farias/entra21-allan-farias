const { Post } = require("../db/models")

async function getPosts(req, res, next) {
    const userId = req.params.id;
    const postId= req.params.id;

    try {
        const posts = await Post.findOne({
            where: { id: postId }
        });
        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

async function updatePost(req, res, next) {
    const { title, content } = req.body;
    const postId = req.params.id;

    try {
        const post = await Post.findOne({
            where: { id: postId }
        });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        post.title = title;
        post.content = content;
        await post.save();

        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

async function deletePost(req, res, next) {
    // Obter o id dos parametros
    const postId = req.params.id;
    try {
        // Verificar se o usuario com aquele id existe
        const post = await Post.findOne({
            where: { id: postId }
        });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        // Remover o usuario do bd ()
        await post.destroy();
        res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    updatePost,
    deletePost,
    getPosts
}