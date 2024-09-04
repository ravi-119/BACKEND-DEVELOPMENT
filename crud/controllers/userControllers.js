const User = require('../models/userModel.js')

exports.home = (req, res) => {
    res.send("Hello World!");
}

exports.createUser = async(req, res) => {
    // extract info 
    try {
        const {name, email} = req.body 

        // if (!name || !email) {
        //     throw new Error("Name and Email are required")
        // }

        // const userExists = User.findOne({email})

        // if (userExists) {
        //     throw new Error("User Already exists")
        // }
 
        const user = await User.create({
         name,
         email
        })
 
        res.status(201).json({
         success: true,
         message: "User created Successfully",
         user
        })
 
     } catch (error) {
         console.log(error);
         res.status(400).json({
             success: false,
             message: "error.message",
         })  
     }
 
}