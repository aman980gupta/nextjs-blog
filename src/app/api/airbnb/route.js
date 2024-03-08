import { client } from "@/app/lib/conectDB"
import { NextResponse } from "next/server"

const getdata = async () => {
    try {
        const airbnbData = await client.connect()
        return await airbnbData.db("sample_airbnb").collection("listingsAndReviews").find({}).limit(10).toArray()
        //return  await client.connect().db("ecomm").collection("users").find({}).toArray()
    } catch (error) {
        console.log(error.message)
    }finally {await client.close()}
}
export const GET = async (req)=>{
    const airbnbData =await getdata()
    //console.log(req)
    return NextResponse.json(airbnbData)
} 