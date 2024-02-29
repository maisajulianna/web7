const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: String,
        trim: true
    }],
    share: {
        type: Boolean,
        default: False
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;