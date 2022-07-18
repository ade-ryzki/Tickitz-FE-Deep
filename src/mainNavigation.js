import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardAdmin, MoviesAdmin, CinemaAdmin } from './Page/Admin';
import {Home, ListMovie, MovieDetail, SignUp, SignIn} from './Page'
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from './route/PublicRoute';


// const SignUp = ()=> {
//   return(
//     <div>SignUp</div>
//   )
// }

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<DashboardAdmin />} />
        <Route path='/admin/movie' element={<MoviesAdmin />} />
        <Route path='/admin/cinema' element={<CinemaAdmin />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        
        <Route path="/" element={
          <PublicRoute ><Home/></PublicRoute>
        } />
        <Route path="/Sign-In" element={
          <PublicRoute isRestricted={true}><SignIn/></PublicRoute>
        } />
        <Route path="/sign-up" element={
          <PublicRoute isRestricted={true}><SignUp/></PublicRoute>
        } />
          {/* Auth PrivateRoute*/}
        <Route path="/dasboard" element={
          <PrivateRoute><Home/></PrivateRoute>
        } />
        <Route path="/list-movie" element={<ListMovie />} />
        <Route path='/movie-detail'  element={<MovieDetail />}>
        <Route path=':movieId'  element={<MovieDetail />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
};

export default MainNavigation;