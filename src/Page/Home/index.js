import { React, useEffect } from "react";
import Navbar from "../../Component/Navbar";
import NavbarLogOut from "../../Component/NavbarLogOut";
import Footer from "../../Component/Footer";
import "././Componet/homepage.css";
import Post1 from "./Componet/Post1";
import Post2 from "./Componet/Post2";
import Post3 from "./Componet/Post3";
import Post4 from "./Componet/post4";
import { useDispatch, useSelector } from "react-redux";
import { GetMovie } from "../../redux/actions/Movie";
import {useNavigate} from "react-router-dom"
import { AuthLogOut } from "../../redux/actions/Auth";


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // movies 
  useEffect(() => {
    dispatch(GetMovie({ page: 1, limit: 10 }));
  },[]);
  
  const {data, error, loading } = useSelector((state) => state.movie);
  const {isSignIn} = useSelector((state) => state.auth);
  useEffect(()=> {
    if(isSignIn === false){// change == to ===
      navigate('/sign-in', {replace: true})
    }
},[isSignIn])
  console.log(data);

  return (
    <>
      {/* <Navbar /> */}
      {isSignIn ? (
      <Navbar/>
      // <Navbar  onClick={()=> {
      //   dispatch(AuthLogOut())
      // }}>Logout</Navbar>
    ):(
     <NavbarLogOut/>
    )}
      <main>
        <Post1 />
        <Post2 />
        <Post3 />
        <Post4 />
      </main>
      <Footer />
    </>
  );
};

export default Home;

{/* // function Home() {
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
// export default Home */}
