const mongoose = require("mongoose");
const ToPost = require("../models/postModel");

//Add a new Post
const addPost = async (req, res) => {
    const { title, description, user_id, attachment } = req.body;
    
    try {
        const user_id = req.user._id;
        const newPost = new ToPost({ title, description, user_id, attachment });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ error: error });
    };
};

//Get all Posts
const getPosts = async (req, res) => {
    const user_id = req.query.user_id;

    try {
        const posts = await ToPost.find({user_id}.sort({createdAt: -1}));
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });
    };
};

//Get Post by ID
const getPostByID = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No Post with that ID");
    };

    try {
        const user_id = req.user._id;
        const post = await ToPost.findById(id);
        if (!post) {
            return res.status(404).send("No Post with that ID found");
        };
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: "Server went bzzt, bzzt" });
    };
};

//Update Post by ID
const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const user_id = req.user._id;
        const post = await ToPost.findByIdAndUpdate(
            { _id: id, user_id: user_id },
            { ...req.body },
            { new: true });
        if (!post) {
            return res.status(404).send("No Post with that ID found");
        };
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server went bzzt, bzzt" });
    };
};

//Delete Post by ID
const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const user_id = req.user._id;
        const post = await ToPost.findByIdAndDelete({ _id: id, user_id: user_id });
        if (!post) {
            return res.status(404).send("No Post with that ID found");
        };
        res.status(200).json({ message: "Post Deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server went bzzt, bzzt" });
    };
};

module.exports = {
    addPost,
    getPosts,
    getPostByID,
    updatePost,
    deletePost
};