"use client"
import axios from "axios";

const Blog = () => {
  const habdleCLick = async() =>{
    const res = await axios.get("http://localhost:3000/api/logout")
    console.log(res)
  }
  return (
    <div className="grid place-content-center place-items-center p-3 bg-red-300 h-full">
      <button onClick={habdleCLick} className="text-2xl border px-4 py-2">log out</button>
    </div>
  )
}

export default Blog