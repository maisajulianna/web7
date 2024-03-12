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


postSchema.statics.newPost = async function (title, author, content, attachment) {
    //console.log("author: ", author, "title: ", title, "content: ", content, "attachment: ", attachment);
    console.log("Entered Post Schema");
    if(!title || !content) {
        throw new Error("Title and content are required to create a post");
    };
    console.log("Trying to create a new Post with: ", title, author, content, attachment);
    const post = await this.create({title, author, content, attachment});
    
    console.log("Post created!", post);
    return post;
};

module.exports = mongoose.model("Post", postSchema);

