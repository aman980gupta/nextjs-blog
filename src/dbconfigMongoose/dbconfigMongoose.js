import mongoose from "mongoose";

export const connectMongoose = async() =>{
    try {
        mongoose.connect(process.env.MONGODB_MONGOOSE_URI)
        const connection = mongoose.connection;
        connection.on("connected",()=>console.log("connection successfull"))
        connection.on("error",(err)=>{
            console.log("connection error ",err)
            process.exit();
        })
    } catch (error) {
        console.log("something gone wrong",error)
    }
}