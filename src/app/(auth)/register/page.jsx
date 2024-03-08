"use client"
import { useState } from "react";
import axios from "axios";
import {useRouter} from "next/navigation"

const Register = () => {
  const router=useRouter()
  const initialStage = {
    userName: "",
    email: "",
    password: ""
  }
  const [user, setUser] = useState(initialStage);

  const [isPainding,setIsPainding] = useState(false)
  const [isDisable,setIsDisable] = useState(true)
  const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validRegexUserName = /^[0-9A-Za-z]{4,16}$/;
  const validRegexPassword = /^.{6,16}$/;
  const isValid = validRegexUserName.test(user.userName) && validRegexEmail.test(user.email)  && validRegexPassword.test(user.password) 
  const changeHandle = (e) => setUser(prev=> ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      setIsPainding(true)
      if(isValid){
        const userDetails =await axios.post("http://localhost:3000/api/register",user)
        console.log("worked")
        console.log(userDetails)
        router.push("/login")
        return;
      }
      console.log("not  working")
      console.log(user)
    } catch (error) {
      console.log(error)
    }finally{setIsPainding(false); setUser(initialStage)}

  }
  return (
    <div className="flex m-auto min-h-full">
      <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full">
      <h2>{isPainding ? "Painding" : "signUp"}</h2>
        <div className="flex  justify-center items-center p-4 gap-3" >
          <label htmlFor="userName">User Name</label>
          <input id="userName" name="userName" type="text" value={user.userName} onChange={changeHandle}  className="focus:outline-none focus:border-gray-600"/>
        </div>
        <div className="flex  justify-center items-center p-4" >
          <label htmlFor="email">email</label>
          <input id="email" name="email" type="email" value={user.email} onChange={changeHandle} />
        </div>
        <div className="flex  justify-center items-center p-4" >
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={user.password} onChange={changeHandle} />
        </div>

        <button  className="p-2 bg-slate-500" >Signup</button>
      </form>
    </div>
  )
}

export default Register;
