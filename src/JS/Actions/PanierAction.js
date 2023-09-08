import { ADD_PANIER, TOTAL_PANIER } from "../ActionTypes/ActionsTypes"

export const addpanier =(id)=>{
    return{
        type:ADD_PANIER,
        payload:id
    }
}

export const totalpanier=(id)=>{
    return{
        type:TOTAL_PANIER,
        payload:id
    }
}