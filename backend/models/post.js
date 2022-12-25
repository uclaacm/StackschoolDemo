const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    num_likes: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;