const mongoose = require("mongoose");
const Post = require("../models/postModel");
const User = require("../models/userModel");


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
    console.log("Started creating a new post from Controller");
    const findUser = async (req, res) => {
        const { username } = req.params;
        // const user = await User.findOne({ username });

        if (!username) {
            return res.status(404).json({ error: "User not found" });
        };
        
        return username;
    };

    const author = await findUser(req, res);
    console.log("Getting in controller Author: ", author);

    try {
        console.log("Attempting Try to create a new post in controller");
        const newPost = new Post({ ...req.body, author: author });
        console.log("Created format for the new post in controller: ",newPost);
        await newPost.save();
        console.log("Saved new post in controller: ");
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