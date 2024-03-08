import { NextResponse } from "next/server"; 

const responce = NextResponse.json({
    message: "token deleted",
    success: true
});

export const GET =async () =>{
    const token =await responce.cookies.get("token")
    console.log(token)
    await responce.cookies.set("token","", {expiresIn:new Date()})
    return responce
}