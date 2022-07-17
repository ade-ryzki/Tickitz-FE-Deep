import { combineReducers } from "redux"
import Movie from "../reducers/movie"
import Auth from '../reducers/Auth'


const rootReducers= combineReducers({
    movie: Movie,
    auth: Auth
})

export default rootReducers