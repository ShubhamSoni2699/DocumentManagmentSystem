import mongoose from "mongoose";
import bcrypt from "bcrypt";

const appSchema = new mongoose.Schema(
    {
        password:{
            type:String,
            required:true,
        },
        noOfUsers:{
            type:Number,
            required:true,
            default:0
        }
    },
    {timestamps:true}
)

appSchema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password = bcrypt.hash(this.password , process.env.SALT_ROUND);
    }
    next();
})

appSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password);
}

export const App = mongoose.model("App",appSchema)