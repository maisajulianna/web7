const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const { checkRole } = require("../middleware/rolesMiddleware");

const {
    getPosts,
    addPost,
    getPostById,
    getUsersPosts,
    updatePost,
    deletePost
} = require('../controllers/postController');


//Activating Authentification for Routers

// GET all posts
router.get('/', getPosts);

// ADD a new post
router.post('/', checkRole( 'user' || 'admin' ), addPost);

// GET a post by its ID
router.get('/:id', getPostById);

// GET user's posts by username
router.get('/:username', getUsersPosts);

// UPDATE a post with PUT by its ID
router.put('/:id', checkRole('user'), updatePost);

// DELETE a post by its ID
router.delete('/:id', checkRole('user'), deletePost);


module.exports = router;










