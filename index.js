import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './Routes/jobpost.js';
import workRoutes from './Routes/workposts.js';
const app = express();
import dotenv from 'dotenv'
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts',postRoutes);
app.use('/work/works',workRoutes);

const PORT = process.env.PORT|| 5000;
if(process.env.NODE_ENV==='PRODUCTION'){
  app.use(express.static('client/build'))
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);