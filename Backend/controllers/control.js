const express = require('express');
const router = express.Router();
const Post = require('../models/empleado.model');


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }
});


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


router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({ message: error.message });
    }
}); 

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


router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removedPost);
    } catch (error) {
        res.json({ message: error.message });
    }
});

module.exports = router;
