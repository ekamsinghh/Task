const User = require("../models/User")
const History = require("../models/History")

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

const claimPoints = async (req,res) => {
    try{
        const min = 0;
        const max = 10;
        const point = Math.floor(Math.random() * (max - min + 1)) + min;
        await User.findByIdAndUpdate(req.params.id,
            {
                $inc:{
                    points:point
                }
            },
            {
                new:true
            }
        );
        const userId = req.params.id;

        await History.create({
            user: userId,
            points: point
        });
        
        return res.status(200).json({
            Success: true,
            message: "Points Added Successfully",
        })
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
    createUser,
    claimPoints
}