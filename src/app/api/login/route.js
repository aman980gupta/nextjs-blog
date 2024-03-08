import { NextResponse, NextRequest } from "next/server";
import { connectMongoose } from "@/dbconfigMongoose/dbconfigMongoose"
import bcryptjs from "bcryptjs"
import User from "@/models/userModelMongoose";
import jwt from "jsonwebtoken";

export const GET = async () => {
    return NextResponse.json({ msg: "this is login page api" })
}
const jwt_secret = "wasdjkhasjkdhjkashdjkhasjkdhajkshdjashdkh"
export const POST = async (req) => {
    const responce = NextResponse.json({
        message: "token genrated",
        success: true
    });
    await connectMongoose()
    const { email, password } = await req.json();
    const user = await User.findOne({ email })
    if (user) {
        const isVarifiedUser = await bcryptjs.compareSync(password, user.password);
        if (isVarifiedUser) {
            const token = jwt.sign({ email: user.email, userName: user.userName }, jwt_secret, { expiresIn: "1d" })
            console.log(token)
            responce.cookies.set("token", token, { httpOnly: true })
            return responce

            //return NextResponse.json({msg:"password verifing"},{status:200})
            //return NextResponse.json({isVarifiedUser,message:"password verified"},{status:200})
        } else { return NextResponse.json({ isVarifiedUser, message: "password not matched" }, { status: 300 }) }
    } else {
        return NextResponse.json({ msg: "User emai is not existed" }, { status: 300 })
    }
}