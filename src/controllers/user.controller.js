import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res) =>{

    const {name,email,dob} = req.body;

    

    res.status(200).json({
        message:"ok"
    });
} );

export default registerUser;