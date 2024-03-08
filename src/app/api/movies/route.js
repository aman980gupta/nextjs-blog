import { NextResponse } from "next/server";
import {client} from "@/app/lib/conectDB";

const run = async () =>{
    try {
        await client.connect();
       const movieData = await client.db("sample_mflix").collection("movies").find({}).limit(10).toArray()
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        //console.log(movieData);
        return movieData
    
    } catch (error) {
        console.log(error)
    }finally{await client.close();}
    }

export async function GET (req){
     const finalData = await run()
    return NextResponse.json(finalData)
}


// export async function POST (req){
//     return NextResponse.json({"msg" : "hello next js "})
// }