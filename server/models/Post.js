const { Schema, model, Types } = require("mongoose");

const postSchema = new Schema ({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description :{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = model("Post", projectSchema);

module.exports = Post;

