import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Page/Home';
import ListMovie from './Page/ListMovie';
import MovieDetail from './Page/MovieDetail';
import SignUp from './Page/SignUp';
import { DashboardAdmin, MoviesAdmin, CinemaAdmin } from './Page/Admin';


function App() {

  return (
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
  );
}

export default App;
