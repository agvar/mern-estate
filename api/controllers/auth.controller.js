import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';

export const  signup= async (req,res,next)=>{
const {username,email,password} = req.body;
const hashPassword = bcryptjs.hashSync(password,10);
const newUser = new User ({username,email,password:hashPassword});
try {
    await newUser.save();
    res.status(201).json({message : "user Created sucessfully",data :{username:{username}}})
} catch(error){
    next(error);
}

};

export const signin = async(req,res,next) => {
    const {email,password} =req.body;
       try{
        console.log(req.body);
        const validUser = await User.findOne({email});     
        if (!validUser) return errorHandler(404,'User Name not Found!');
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if (!validPassword) return errorHandler(401,'Wrong Credentials');

        const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET);
        const {password:pass,...rest} = validUser;
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
        console.log(rest);
    }
    catch(error){
        next(error);
    }
};
