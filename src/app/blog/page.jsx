"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter()
  const habdleCLick = async() =>{
    const res = await axios.get("api/logout")
    console.log(res)
    //signIn()
    router.replace("/login")
  }
  return (
    <div className="grid place-content-center place-items-center p-3 bg-red-300 h-full">
      <button onClick={habdleCLick} className="text-2xl border px-4 py-2">log out</button>
      

    </div>
  )
}

export default Blog;
//<button onClick={signIn} className="text-2xl border px-4 py-2">console token</button>