import express from 'express';
import mongoose from 'mongoose';

import PostWork from '../models/workpost.js';

const router = express.Router();

export const getwork = async (req, res) => { 
    try {
        const Workmessage = await PostWork.find();
                
        res.status(200).json(Workmessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const getPost = async (req, res) => { 
//     const { id } = req.params;

//     try {
//         const post = await PostJob.findById(id);
        
//         res.status(200).json(post);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const createWork = async (req, res) => {
    const {name,PointofContact,selectedFile}= req.body;

    const newWorkmessage = new PostJob({ name,PointofContact,selectedFile });
    try {
        await newWorkmessage.save();

        res.status(201).json(newWorkmessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export default router;