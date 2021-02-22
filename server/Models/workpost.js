import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    PointofContact: Number,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostWork = mongoose.model('PostWork', postSchema);

export default PostWork;