import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './routes/user.route.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION).then(()=>{
console.log("connected to Mongodb database");
}).catch((err)=>{
console.log(err);
})
;

const app=express();

app.listen(3000,()=>{
    console.log("Server is running ");
});

app.use('/api/user',UserRouter);