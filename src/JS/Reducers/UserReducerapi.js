import { GET_USER } from "../ActionTypes/ActionsTypes"

const initialState={
    users:[]
}
    

const userReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case GET_USER:
            return{...state,users:payload}
            default:
                return state
    }
        
}

export default userReducer