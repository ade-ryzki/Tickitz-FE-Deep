import {Link} from "react-router-dom"
import tickitz from "../img/Tickitz.svg"
import Home from './../Page/Home/index';


function Navbar() {
    return(
        <>
        <nav className="navbar navbar-desktop navbar-expand-lg bg-white">
        <div className="container-fluid">
            <Link to="/">
                <a className="navbar-brand" >
                    <img src={tickitz} alt="logo-tickitz" />
                </a>
            </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active bold" >Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list-movie">
                <a className="nav-link active bold" >List movie</a>
              </Link>
            </li>
            </ul>
          </div>
          <button className="btn btn-primary" type="submit">Sign Up</button>
        </div>
      </nav>

      <nav class="navbar nav-phone navbar-expand-lg bg-white p-2">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={tickitz} alt="logo-tickitz" />
          </a>
          <div class="hamburger-button d-flex flex-column align-items-end" id="navbarNav">
            <div class="line mb-1">
            </div>
            <div class="line-2 mb-1">
            </div>
            <div class="line"></div>
          </div>
        </div>
      </nav>
        </>
        
        
        
    )
}

export default Navbar