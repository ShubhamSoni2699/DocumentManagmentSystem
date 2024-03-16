import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req,res) =>{

    const {name,email,dob} = req.body;

    if(
        [name,email,dob].some(fields=>fields?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required");
    }

    const existedUser = await User.findOne({
        $and:[{ name } , { email }]
    })

    if(existedUser){
        throw new ApiError(409, "User already existed with these fields");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    if(!avatarLocalPath){
        throw ApiError(400 , "Avatar is required")
    }

    const user = await User.create(
        name,
        email.toLowerCase(),
        dob
    );

    const createdUser = await User.findById(user._id);

    if(!createdUser){
        throw new ApiError(500,"Something went wrong");
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User register successfully")
    )
} );

export default registerUser;