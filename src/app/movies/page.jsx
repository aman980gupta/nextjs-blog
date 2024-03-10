"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";

const Movies = () => {
  const [movieData, setMovieData] = useState([])
  const getMovieData = async () => {
    try {
      const data = await axios.get("api/movies").then(res => setMovieData(res.data))
      //console.log(data)
    } catch (error) {
      throw new Error(error)
    }
  }
  useEffect(() => getMovieData, [])
  //console.log(movieData)
  return (
    <div>
      <p>this is movie page</p>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              movieData.map((movie,i)=><Card key={i} movie={movie}/>)
            }
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Movies;