"use client"
import { useState } from "react";
import axios from "axios";
import {useRouter} from "next/navigation"

const Login = () => {
  const router=useRouter()
  const initialStage = {
    userName: "",
    email: "",
    password: ""
  };
  const [user, setUser] = useState(initialStage);
  const [isPainding, setIsPainding] = useState(false);
  const changeHandle = (e) => setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsPainding(true)
      const userDetails = await axios.post("http://localhost:3000/api/login", user)
      console.log("Log in")
      console.log(userDetails)
      router.push("/blog")
    } catch (error) {
      console.log(error)
    } finally { setIsPainding(false); setUser(initialStage) }

  }
  return (
    <div className="flex m-auto min-h-full">
      <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full">
        <h2>{isPainding ? "Painding" : "Log In"}</h2>

        <div className="flex  justify-center items-center p-4" >
          <label htmlFor="email">email</label>
          <input id="email" name="email" type="email" value={user.email} onChange={changeHandle} />
        </div>
        <div className="flex  justify-center items-center p-4" >
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={user.password} onChange={changeHandle} />
        </div>

        <button className="p-2 bg-slate-500" >Signup</button>
      </form>
    </div>
  )
}

export default Login;