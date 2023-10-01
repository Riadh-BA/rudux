import { combineReducers } from "redux";
import ListReducer from './ProductReducer'
import MovieReducer from './MovieReducer'
import taskreducer from './TaskReducer'
import userReducer from './UserReducerapi'

// rootReducer la reducer principale qui nous devrons envoyer a Store(car store prend un seul reducer)
//combineReducers fct predefini qui rassemble tous les reducers

const rootReducer=combineReducers({ListReducer,MovieReducer,taskreducer,userReducer})
export default rootReducer