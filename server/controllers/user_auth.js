import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {userModel} from '../models/users.js';

export const register = async (req,res)=>{
    if(!req.body){
        return res.json({
            success:false,
            message:"No data provided."
        })
    }
    //check if req.body is empty

    const {email,password} = req.body;

    if(!email || !password){
        return res.json({
            success:false,
            message:'Missing details.'
        })
    }
    //check if details are incomplete

    try{
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.json({
                success:false,
                message:'User already exists.'
            })
        }
        //check if theres already an existing user with same email

        const hashedPassword = await bcrypt.hash(password,10)
        const user = new userModel({
            email,
            password:hashedPassword
        })
        await user.save();
        //hash the password entered by the user and create a new document with the details and save

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: '30d'})
        //creating a token that has user id encoded in it with the help of enviornment variable JWT_SECRET that expires in 30 days

        res.cookie('token',token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 30*24*60*60*1000
        })
        //send token as a cookie through response that varies on node enviornment with maxAge in secs 

        return res.json({
            success:true,
            message:'Welcome.'
        })
    }
    catch(err){
        res.json({
            success:false, 
            message: err.message
        })
    }
}

export const login = async (req,res)=>{
    if(!req.body){
        return res.json({
            success:false,
            message:"No data provided."
        })
    }
    //check if req.body is empty

    const {email,password} = req.body;
    //get email and password from the body of request 

    if(!email || !password){
        return res.json({
            success:false,
            message:'Email and Password are required.'
        })
    }
    //check for missing detail

    try{
        const user = await userModel.findOne({email});
        //find user with the help of email

        if(!user){
            return res.json({
                success:false,
                message:'Invalid email or password.'
            })
        }
        //if user doesnt exist then response will be invalid email or password to avoid brute force attempt by intruder

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({
                success:false,
                message:'Invalid email or password.'
            })
        }
        //if password is wrong then response will be invalid email or password to avoid brute force attempt by intruder

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: '30d'})
        //creating a token that has user id encoded in it with the help of enviornment variable JWT_SECRET that expires in 30 days

        res.cookie('token',token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 30*24*60*60*1000
        })
        //send token as a cookie through response that varies on node enviornment with maxAge in secs 

        return res.json({
            success:true,
            message:'Welcome.'
        })
    }
    catch(err){
        return res.json({
            success:false,
            message: err.message
        })
    }
}

export const logout = async (req,res) => {
    try{
        res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        })
        //clearing a cookie and terminating a session

        return res.json({
            success:true,
            message:'Logged out of the account.'
        })
    }
    catch(err){
        return res.json({
            success:false, 
            message:err.message
        })
    }
}

export const isAuthenticated = async (req,res)=>{
    try{
        return res.json({
            success:true
        })
    }
    catch(err){
        return res.json({
            success: false,
            message: err.message
        })
    }
}
//a function that will be used in a route which then will be called by client side to check whether the user is authenticated or not