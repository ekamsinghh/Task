const History = require("../models/History");

const pointHistory = async (req,res) => {
    try{
        const userId = req.params.id;
        const history = await History.find({
            user: userId
        }).sort({createdAt: -1});
        return res.status(200).json({
            history: history,
            message: "History found"
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
    pointHistory
}