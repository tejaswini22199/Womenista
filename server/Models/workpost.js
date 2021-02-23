import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    Contact: Number,
    toolsUsed:[String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostWork = mongoose.model('PostWork', postSchema);

export default PostWork;