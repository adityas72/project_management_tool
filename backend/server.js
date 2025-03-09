import express from "express";
import api from './routes/index.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()
mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('connect');
}, (e) => console.log(e))


const PORT = process.env.PORT || 9000; 
const origin = process.env.CORS_ORIGIN || 'http://localhost:3000'

const app = express();

app.use(cors({
    origin
}));
app.use(express.json())
app.use(express.urlencoded())

app.use(api)

import findFreePort from "find-free-port";

findFreePort(9000).then(([PORT]) => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

app.get("/", (req, res) => {
    res.send("Backend is working!");
  });
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


