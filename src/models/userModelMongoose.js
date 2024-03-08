import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : [true,"Please provide a user name"],
        unique : true,
    },
    email: {
        type : String,
        required : [true,"Please provide a email"],
        unique : true,
    },
    password: {
        type : String,
        required : [true,"Please provide a email"],
    },
    isVerified : {
        type : Boolean,
        default : false, 
    },
    isAdmin : {
        type : Boolean,
        default : false, 
    },
    frogetPassword : String,
    frogetPasswordExpiry : Date,
    verifyToken : String,
    verifyTokenExpiry : Date,
    

});

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;