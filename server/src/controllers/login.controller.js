import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { App } from "../models/app.models.js";

const loginApp = asyncHandler( async (req,res) => {
    const {password} = req.body;
    const app = await App.findOne({});

    if(!app){
        throw ApiError(500 , "Password not set");
    }

    const isPasswordValid = await app.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw ApiError(401,"Password is invalid");
    }

    const options = {
        httpOnly:true,
        secure:true
    };

    return res.status(200).cookie("isValidate","1",options).json(
        new ApiResponse(200 , 
            "Login successfully"
        )
    )

});