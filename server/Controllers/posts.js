import express from 'express';
import mongoose from 'mongoose';

import PostJob from '../models/jobpost.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostJob.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostJob.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const{ Jobtitle,  PointofContact,Owner ,Skills,Pay } = req.body;

    const newPostMessage = new PostJob({ Jobtitle,  PointofContact,Owner ,Skills,Pay });
    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export default router;