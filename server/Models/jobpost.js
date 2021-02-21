import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    Jobtitle: String,
    PointofContact: Number,
    Owner: String,
    Skills: [String],
    Pay: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostJob = mongoose.model('PostJob', postSchema);

export default PostJob;