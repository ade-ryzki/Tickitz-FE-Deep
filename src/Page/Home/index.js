import React, { useEffect } from 'react'
import Navbar from "../../Component/Navbar"
import Footer from "../../Component/Footer"
import "./homepage.css"
import Post1 from "./Post1"
import Post2 from "./Post2"
import Section3 from "./Section3"

function Home() {
    useEffect(() => {
        document.title = "Tickitz - Home"
    })
    return(
        <>
            <Navbar />
            <main>
                <Post1 />
                <Post2 />
                <Section3 />
            </main>
            <Footer />
        </>
        
    )
}









export default Home