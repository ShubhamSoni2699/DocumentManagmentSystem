import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

connectDB()
.then( ()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    });
    app.on("error",(error)=>{
        console.log("Error in listing :",error);
    })
} )
.catch( (error)=>{
    console.log("Mongodb Connection error :",error);
});

