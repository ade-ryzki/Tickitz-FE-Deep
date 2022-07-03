import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loanding"

function Section1 () {
    // ini buat ambil dari database
    // const [movieSchedule, setMovieSchedule] = useState({
    //     loading: false,
    //     result: {
    //         data: []
    //     }
    // })

    
    // useEffect(()=> {
    //     setMovieSchedule((prevState) => {
    //         return { ...prevState, loading: true}
    //     })
    //     axios({
    //         method: "GET",
    //         url: "http://localhost:5000/api/v1/movies"
    //     }).then((res) => {setMovieSchedule({
    //         loading:false,
    //         result: res.data
    //     })})
    //     .catch()
    // }, [])

    return(
        <section className="grayscale-4 p-5 mb-4">

        <h1>Section1</h1>
        {/* buat tampil image
            <div className="movie-scroll  my-3 p-5">
            { 
                (movieSchedule.loading ? <Loading /> : movieSchedule.result.data.map((movie) => (
                    <div className="movie-container p-4 m-2 border border-white" key={movie.id}>
                        <img className="" src={"../../img/" + movie.cover} alt={movie.title} />
                    </div> 
                ))
            )}  
        </div>   */}
        
      </section>
    )
}



export default Section1