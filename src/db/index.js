import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log(`Mongodb connected !! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection error :",error);
    }
};

export default connectDB;