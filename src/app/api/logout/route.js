import { NextResponse } from "next/server";

export const GET = async () => {
    const responce = NextResponse.json({
        message: "token deleted",
        success: true,
    });
    const token = await responce.cookies.get("token")
    console.log(token)

    await responce.cookies.delete("token")
    return responce
}