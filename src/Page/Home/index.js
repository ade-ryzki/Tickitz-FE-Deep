import Navbar from "../../Component/Navbar"
import Footer from "../../Component/Footer"
import spiderMan from "../../img/spiderman-header.png"
import lionKing from "../../img/lion-header.png"
import blackWidow from "../../img/header2.png"
import "./homepage.css"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

function Home() {
    return(
        <>
            <Navbar />
            <Header />
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
            </main>
            <Footer />
        </>
        
    )
}

function Header() {
    return(
    <>
        <h1>Ini Header</h1>
        <img src={spiderMan} />
        <img src={lionKing} />
        <img src={blackWidow} />
    </>
        
    )
}

export default Home