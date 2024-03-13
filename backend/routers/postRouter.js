const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const { checkRole } = require("../middleware/rolesMiddleware");
const checkAuth = require('../middleware/authCheck');

const {
    getPosts,
    addPost,
    getPostById,
    getUsersPosts,
    updatePost,
    deletePost
} = require('../controllers/postController');


//Activating Authentification for Routers
router.use(checkAuth);
// router.use(checkRole('user'));

// GET all posts
router.get('/', getPosts);

// ADD a new post
router.post('/:username', addPost);

// GET a post by its ID
router.get('/:id', getPostById);

// GET user's posts by username
router.get('/:username/posts', getUsersPosts);

// UPDATE a post with PUT by its ID
router.put('/:id', updatePost);

// DELETE a post by its ID
router.delete('/:id', deletePost);


module.exports = router;










