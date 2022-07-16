import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardAdmin, MoviesAdmin, CinemaAdmin } from './Page/Admin';
import {Home, ListMovie, MovieDetail, SignUp, SignIn} from './Page'

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/admin' element={<DashboardAdmin />} />
        <Route path='/admin/movie' element={<MoviesAdmin />} />
        <Route path='/admin/cinema' element={<CinemaAdmin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/list-movie" element={<ListMovie />} />
        <Route path='/movie-detail'  element={<MovieDetail />}>
        <Route path=':movieId'  element={<MovieDetail />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
};

export default MainNavigation;