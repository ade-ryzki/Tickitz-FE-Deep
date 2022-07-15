import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home/index';
import ListMovie from './Page/ListMovie/index';
import MovieDetail from './Page/MovieDetail/index';
import SignUp from './Page/SignUp/index';
import { DashboardAdmin, MoviesAdmin, CinemaAdmin } from './Page/Admin';

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-movie" element={<ListMovie />} />
        <Route path='/admin' element={<DashboardAdmin />} />
        <Route path='/admin/movie' element={<MoviesAdmin />} />
        <Route path='/admin/cinema' element={<CinemaAdmin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/movie-detail'  element={<MovieDetail />}>
        <Route path=':movieId'  element={<MovieDetail />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
};

export default MainNavigation;