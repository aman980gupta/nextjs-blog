import { NextResponse } from "next/server";

export const GET = async () => {
    const responce = NextResponse.json({
        message: "token deleted",
        success: true,
    });
    const token = await responce.cookies.get("token")
    console.log(token)

    await responce.cookies.set("token", "", { expiresIn: new Date(0) })
    return responce
}