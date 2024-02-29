const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const { checkRole } = require("../middleware/rolesMiddleware");

const {
    getPosts,
    addPost,
    getPostById,
    updatePost,
    deletePost
} = require('../controllers/postControllers');

//Activating Authentification for Routers

// Get all posts
router.get('/', getPosts);

// Add a new post
router.post('/', checkRole('user'|| 'admin' || 'moderator'), addPost);

// Get post by ID
router.get('/:id', getPostById);

// update post 
router.put('/:id', checkRole('user'), updatePost);



//delete post
router.delete('/:id', checkRole('user'), deletePost);


module.exports = router;










