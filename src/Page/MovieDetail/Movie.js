import axios from "axios"
import React, {useState, useEffect} from "react"

function Movie(props) {

    // const id = props.id
    // const [showMovie, setShowMovie] = useState({
    //     loading: false,
    //     result: {
    //         data: []
    //     }
    // })

    // useEffect(()=> {
    //     setShowMovie((prevState) => {
    //         return{...prevState, loading: true}
    //     })
    //     axios({
    //         method: "GET",
    //         url: `http://localhost:5000/api/v1/movies/${id}`
    //     }).then((res) => setShowMovie({
    //         loading: false,
    //         result: res.data
    //     })
    //     ).catch()
    // }, [])
    
    // console.log(showMovie.result.data[0])

//    return( 
//       showMovie.loading ?  <Loading /> :  {showMovie.result.data.map( (item) => <Header movie={item} />)}/> 
//    )
    
   
}

function Header(props) {
    
    const movie = props.movie
    return(
        <header>
            <h1>Disini taro detail movie dari database {movie}</h1>
        </header>
    )
}


function Loading() {
    return <h1 className="font-d-s">loading...</h1>
}
export default Movie

