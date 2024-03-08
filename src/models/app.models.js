import mongoose from "mongoose";

const appSchema = new mongoose.Schema(
    {
        password:{
            type:String,
            required:true,
        },
        noOfUsers:{
            type:Number,
            required:true
        }
    },
    {timestamps:true}
)

export const App = mongoose.model("App",appSchema)