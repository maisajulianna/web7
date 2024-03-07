const mongoose = require("mongoose");
const Post = require("../models/postModel");


// GET all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

// ADD a new post
const addPost = async (req, res) => {
    const { username } = req.user;

    try {
        const newPost = new Post({ ...req.body, author: username });
        console.log(newPost);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ error: error.message });
    };
};

// GET a post by post's ID
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send("No post with that ID found");
        };
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: "Server went bzzt, bzzt" });
    };
};

// GET all posts by username
const getUsersPosts = async (req, res) => {
    try {
        const { username } = req.params;
        const posts = await Post.find({ author: username });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE post by ID
const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
            );
        if (!post) {
            return res.status(404).send("No post with that ID found");
        };
        res.status(200).send(post);
    } catch (error) {
        res.status(500).send({ error: error.message });
    };
};

// DELETE post by ID
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).send("No post with that ID found");
        };
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = {
    getPosts,
    addPost,
    getPostById,
    getUsersPosts,
    updatePost,
    deletePost
};