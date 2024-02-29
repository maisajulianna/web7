const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
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
    }
});


module.exports = mongoose.model("Comments", commentSchema);