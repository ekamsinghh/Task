const User = require("../models/User")

const getUsers = async (req,res) => {
    try{
        const users = await User.find().sort({points:-1});
        res.status(200).json({
            status:"Success",
            data:users
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status:"Error",
            message:"Internal Server Error"
        });
    }
}

const createUser = async (req,res) => {
    try{
        const {name,profileImage} = req.body;
        const user = await User.create({
            name,
            profileImage
        });
        res.status(201).json({
            status:"Success",
            data:user
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            status:"Error",
            message:"Internal Server Error"
        });
    }
}
module.exports={
    getUsers,
    createUser
}