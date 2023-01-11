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
    type :{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        min: 0,
        max: 10,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Post = model("Post", postSchema);

module.exports = Post;

