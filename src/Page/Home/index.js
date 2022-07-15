import  { React, useEffect } from 'react'
import Navbar from "../../Component/Navbar"
import Footer from "../../Component/Footer"
import "./homepage.css"
import Post1 from "./Post1"
import Post2 from "./Post2"
import Post3 from "./Post3"
import Post4 from "./post4"
//add
import { useDispatch, useSelector } from "react-redux"
import { GetMovie, } from "../../redux/actions/Movie"


const Home = ()=> {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(GetMovie({page:1, limit:5}))
    },[])
    // question, ketika di dispatch error white
    const data = useSelector((state)=> state.movie)
    console.log(data)
    return(
        <>
            <Navbar />
            <main>
                <Post1 />
                <Post2 />
                <Post3 />
                <Post4 />
            </main>
            <Footer />
        </>
    )
}

export default Home

// function Home() {
//     useEffect(() => {
//         document.title = "Tickitz - Home"
//     })
//     return(
//         <>
//             <Navbar />
//             <main>
//                 <Post1 />
//                 <Post2 />
//                 <Post3 />
//                 <Post4 />
//             </main>
//             <Footer />
//         </>
        
//     )
// }
// export default Home

