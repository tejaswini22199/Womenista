import axios from 'axios';

const url = 'http://localhost:5000/posts';
const url1='http://localhost:5000/work/works'
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const createWork = (newWork)=>axios.post(url1,newWork);
export const fetchWork=()=>axios.get(url1);