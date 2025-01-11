const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userService = require("../services/user.service");
const cookieParser = require('cookie-parser');
const captainModel = require("../model/captain.model");



module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }


    const isBlacklisted = await captainModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await captainModel.findById(decoded._id)

        req.user = user;

        return next();

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
module.exports.authCaptain= async (req,res,next)=>{
    const token=req.cookies.token|| req.headers.authorization?.split(' ')[1];
    
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const isBlacklisted = await userModel.findOne({ token: token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const captain= await captainModel.findById(decoded._id);
        req.captain=captain;
   
        return next();

    }
    catch(e){
        return res.status(401).json({ message: 'Unauthorized' });
    }
}