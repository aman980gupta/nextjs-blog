import { NextResponse } from "next/server"; 
import {connectMongoose} from "@/dbconfigMongoose/dbconfigMongoose"
import bcryptjs from "bcryptjs"
import User from "@/models/userModelMongoose";

export const GET = async ()=>{
    return NextResponse.json({msg:"get done"})
}
export const POST= async (req)=>{
    await connectMongoose()
    const { userName, email, password } = await req.json();
    const salt = await bcryptjs.genSalt(10)
    const hasedPass = await bcryptjs.hashSync(password,salt);
    const user = await User.findOne({email})
    if(user){
        return NextResponse.json({msg:"user alraidy existed"},{status:400})
    }else{
        const newUser =await new User({
            userName,email,password:hasedPass
        }).save()
        return NextResponse.json({msg:"user created successfuly",newUser},{status:200})
    }
}