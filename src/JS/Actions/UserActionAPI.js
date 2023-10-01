import axios from "axios"
import { GET_USER } from "../ActionTypes/ActionsTypes"

export const getuser=()=>async dispatch=>{
    try{
        const userArray= await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch(
            {
            type:GET_USER,
            payload:userArray.data
            }
        )
    }catch(error){dispatch({
            type:GET_USER,
            // message jaya men axio error
            payload:error.response.message
            }
        )
    }
}