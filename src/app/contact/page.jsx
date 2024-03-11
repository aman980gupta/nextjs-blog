"use client"

import axios from "axios"

const getTOken = async () => {
  const token = await axios.get("/api/contact")
  console.log(token)
  if(!token) return;
  return token
}
const Contect = () => {
  return (
    <div>
      <button onClick={getTOken} >get token</button>
    </div>
  )
}

export default Contect