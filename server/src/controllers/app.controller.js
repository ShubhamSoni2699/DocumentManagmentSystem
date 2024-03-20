import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { App } from "../models/app.models.js";

const appData = asyncHandler( async (req,res) => {
    const {password} = req.body;
    const noOfUsers = 0;

    if(password.trim()===""){
        throw new ApiError(403,"Password is required and can not be empty");
    }

    const appData = await App.create(
        password,
        noOfUsers
    );

    const createdAppData = await App.findById(appData._id);

    if(!createdAppData){
        throw new ApiError(500,"Something went wrong");
    }

    return res.status(201).json(
        new ApiResponse(
            200,
            {
                message:"Password created successfully"
            },
            "App password Successfully applied"
        )
    )
});

export default appData;