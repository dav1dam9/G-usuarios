const express = require('express');
const router = express.Router();
const Post = require('../models/empleado.model');

// 1. OBTENER TODOS LOS POSTS (GET)
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }
});

// 2. GUARDAR UN NUEVO POST (POST)
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        correo: req.body.correo
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error.message });
    }
});

// 3. OBTENER UN POST ESPECÍFICO POR ID (GET)
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({ message: error.message });
    }
}); // <-- AQUÍ SE CIERRA EL GET ESPECÍFICO

// 4. ACTUALIZAR UN POST POR ID (PATCH)
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { name: req.body.name, correo: req.body.correo } }
        );
        res.json(updatedPost);
    } catch (error) {
        res.json({ message: error.message });
    }
});

// 5. ELIMINAR UN POST POR ID (DELETE)
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removedPost);
    } catch (error) {
        res.json({ message: error.message });
    }
});

module.exports = router;