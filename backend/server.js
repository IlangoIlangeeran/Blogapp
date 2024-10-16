const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const PostRoutes = require('../backend/routes/PostRoutes');
require('dotenv').config();

app.use(express.json()); 
app.use(cors()); 

app.use('/posts',PostRoutes)

const PORT = process.env.PORT; 
const MONGODB_URI = process.env.MONGODB_URI

app.listen(5000,(req,res)=>{
    console.log('Server started');
})

mongoose.connect(MONGODB_URI).then(()=>console.log('DB Connected'));