import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import SignupRouter from './routes/auth.route.js';
import UserRouter from './routes/user.route.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION).then(()=>{
console.log("connected to Mongodb database");
}).catch((err)=>{
console.log(err);
})
;

const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is running ");
});

app.use('/api/user',UserRouter);
app.use('/api/auth',SignupRouter);