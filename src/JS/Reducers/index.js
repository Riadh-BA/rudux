import { combineReducers } from "redux";
import ListReducer from './ProductReducer'
import MovieReducer from './MovieReducer'

const rootReducer=combineReducers({ListReducer,MovieReducer})
export default rootReducer