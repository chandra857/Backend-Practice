function validateUser(req,res,next){
    
    const {name,email} = req.body 
    
    if(!name || !email){
        return res.status(400).json({
            message:"Name and Email are Required"
        })
    }

    if(!name.trim()){
        return res.status(400).json({
            message:"Name is required"
        })
    }

    if(typeof name !== "string"){
        return res.status(400).json({
            message:"Name must be string"
        })
    }

    if(typeof email !== "string"){
        return res.status(400).json({
            message:"email must be string"
        })
    }

    if(!email.includes("@")){
        return res.status(400).json({
            message:"Invalid Email"
        })
    }

    next();

}

module.exports = validateUser;