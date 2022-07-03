import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//dummy img
import avenger from "../../img/avenger.png"
import blackwidow from "../../img/black-widow.png"
import witches from "../../img/the witches.png"
import tennet from "../../img/Tenet.png"



function Post2 () {
    const [movieSchedule, setMovieSchedule] = useState({
        loading: false,
        results: {
            data: []
        }
    })

    useEffect(() => {
        setMovieSchedule((prevState) => ({
            ...prevState,
            loading: true
        }))
        axios({
            method: 'GET',
            url: ' https://test.dhanz.me/api/v1/movies',
        }).then((res) => {
            setMovieSchedule({
                loading: false,
                results: res.data
            })
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="now-showing">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <p className="text-nowshowing">Now Showing</p>
                    </div>
                    <div className="col-6 text-end">
                        <Link to={"/movies"} className="fw-bolder text-decoration-none">view all</Link>
                    </div>
                </div>
            </div>
            {/* <div className="cards-movie">
                {movieSchedule.results.data.map((movie, index) => {
                    return (
                        <div className="card-movie" key={index}>
                            <img className="card-movie-list"
                                src={`${'process.env.REACT_APP_URL_IMG'} / 
                                ${movie.image}`} 
                                alt={movie.title} 
                                title={movie.title} 
                                />
                        </div>

                    )
                })}
            </div> */}
            {/* dummy img  */}
            <div className="cards-movie ">
                <div className="card-movie">
                    <img className="card-movie-list"src={avenger}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={tennet}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={witches}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={blackwidow}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={avenger}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={tennet}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={witches}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={blackwidow}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={avenger}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={tennet}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={witches}/>
                </div>
                <div className="card-movie">
                    <img className="card-movie-list"src={blackwidow}/>
                </div>
            </div>
        </div>
    )
}

export default Post2