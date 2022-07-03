import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loanding"
import {Link} from "react-router-dom"

function Section2 () {
    // buat ambil data dari database
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
        <section className="container-fluid">
        <h1>Ini Section2</h1>

        {/* buat  
        <div class="movie-scroll  mx-5 my-5 ">
        { movieSchedule.loading ? <Loading /> : movieSchedule.result.data.map((movie) => {
            return(          
                <div class="border movie-card text-center p-4 me-4 my-3"  key={movie.movie_id}>
                    <img src="./img/black-widow.png" class="mb-3 img-fluid" alt="movie" />
                    <div class="">
                    <h5 class="card-title">{movie.title}</h5>
                    <p class="card-text font-xs mb-4">{movie.categories}</p>
                    <div class="d-grid gap-2">
                        <Link to={"/movie-detail/" + movie.movie_id } key={movie.movie_id}><a href="" class="btn btn-outline-primary ">Details</a></Link>
                    </div>
                    </div>
                </div>    
         )
        })}   
        </div> */}
        
        </section>
    )
}



export default Section2