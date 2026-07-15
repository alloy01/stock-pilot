import jwt from 'jsonwebtoken';

const userAuth = async(req,res,next) => {
    const {token} = req.cookies;
    if(!token){
        return res.json({
            success:false,
            message:'Not Authorized. Login again.'
        })
    }
    //checks if token exists or not

    try{
        const tokenDecode = jwt.verify(token,proccess.env.JWT_SECRET);
        if(tokenDecode.id){
            req.body = req.body || {};
            req.body.userId = tokenDecode.id;
            
        }
        else{
            return res.json({
                success:false,
                message: 'Not Authorized. Login again.'
            })
        }
        //decodes token and attaches token id to req.body

        next()
        //since this function is a middleware there will be a next function to that needs to be executed 
    }
    catch(err){
        return res.json({
            success:false,
            message:err.message
        })
    }
}

export {userAuth}