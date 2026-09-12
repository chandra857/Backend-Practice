const db = require("../database") 
const userService = require('../services/user.service')

const getUsers = (req,res)=>{
    
    const users = userService.getUsers();

    res.status(200).json(users);
}


const getByUserId = (req,res)=>{
    
    const id = Number(req.params.id);
    
    if(Number.isNaN(id)){
        return res.status(400).json({
            message:"Invalid User Id"
        })
    }
    
    const getUser = userService.getUserById(id);
    
    if(!getUser){
        return res.status(404).json({
            message:"User Not Found"
        })
    }

    res.status(200).json(getUser);

}

const createUser = (req,res)=>{
    const {name,email} = req.body
    
    const user = userService.createUser(name.trim(),email.trim())

    res.status(200).json({
        message:"User Created Successfully",
        user:user
    })
} 


const updateUser = (req,res)=>{

    const id = Number(req.params.id) 

    if(Number.isNaN(id)){
        return res.status(400).json({
            message:"Invalid User Id"
        })
    }

    const {name,email} = req.body 

    const changes = userService.updateUser(id,name,email);

    if(changes === 0){
        return res.status(404).json({
            message:"User Not Found"
        })
    }

    res.status(200).json(
        {
            message:"User Updated Successfully"
        }
    )
}


const deleteUser = (req,res)=>{

    const id = Number(req.params.id);

    if(Number.isNaN(id)){
        return res.status(400).json({
            message:"User not found"
        })
    }

    const changes = userService.deleteUser(id);

    if(changes === 0){
        return res.status(404).json({
            message:"User Not Found"
        })
    }

    res.status(200).json({
        message:"User deleted Successfully"
    })
}

module.exports = {createUser,getUsers,getByUserId,updateUser,deleteUser
};