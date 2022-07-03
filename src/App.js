import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Page/Home';
import ListMovie from './Page/ListMovie';
import MovieDetail from './Page/MovieDetail';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-movie" element={<ListMovie />} />
      <Route path='/movie-detail'  element={<MovieDetail />}>
        <Route path=':movieId'  element={<MovieDetail />}/>
      </Route>
    </Routes>
  );
}

export default App;
