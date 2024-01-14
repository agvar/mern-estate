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
    console.log("Server is running on port 3000 ");
});

app.use('/api/user',UserRouter);
app.use('/api/auth',SignupRouter);

app.use((err,req,res,next)=>{
    const  statusCode =  err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
        return res.status(statusCode).json({
            success:false,
            statusCode:statusCode,
            message:message,
        })
    next();
})