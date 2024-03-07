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
    content: {
        type: String,
        required: true
    },
    attachment: {
        type: String,
        default: ""
    },
    likes: {
        type: Number,
        default: 0
    },
    commentCount: {
        type: Number,
        default: 0
    }
});


module.exports = mongoose.model("Post", postSchema);

