import { combineReducers } from "redux"
import Movie from "../reducers/movie"


const rootReducers= combineReducers({
    movie: Movie
})

export default rootReducers