const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserPostSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    liked: {
        type: Boolean,
        default: false
    }
});

const UserPost = mongoose.model("UserPost", UserPostSchema);

module.exports = UserPost;