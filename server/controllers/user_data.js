import { userModel } from "../models/user.js";

export const getData = async (req,res) =>{
    const {userId} = req.body;
    //gets userId from body of the req
    
    try{
        const user = await userModel.findById(userId)

        if(!user){
            return res.json({
                success:false,
                message:"User doesn't exist"
            })
        }
        //checks if user exists or not

        return res.json({
            success:true,
            userData:{
                name: user.name,
                email: user.email
            }
        })
    } 
    catch(err){
        return res.json({
            success: false,
            message: err.message
        })
    }
}