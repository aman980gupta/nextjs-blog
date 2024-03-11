import { NextResponse } from "next/server";

export const GET = async (req) => {
    const responce = NextResponse.json({
        message: "token send get",
        success: true,
    });
    const token = await req.cookies.get("token")?.value
    if(!token)  {return NextResponse.json({msg:"token not fount",success:false})}
    //console.log(token)
    return NextResponse.json({
        message: "token send",
        success: true,
        token
    });
}