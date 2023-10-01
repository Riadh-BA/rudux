import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ActionsTypes"

//initialstate
const initialState={
    listeTask:[
        {id:Math.random(), name:"Task1", isDone:false},
        {id:Math.random(), name:"Task2", isDone:false},
        {id:Math.random(), name:"Task3", isDone:true},
        {id:Math.random(), name:"Task4", isDone:false},
    ]
}

//pure fucntion

export const taskreducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ADD_TASK:
        return{...state,listeTask:[...state.listeTask,payload]}
        case DELETE_TASK:
        return{...state,listeTask:state.listeTask.filter(el=>el.id!==payload)}
        case DONE_TASK:
        return{...state,listeTask:state.listeTask.map((e)=>e.id==payload?{...e,isDone:!e.isDone}:e)}
        case EDIT_TASK:
        return{...state,listeTask:state.listeTask.map((e)=>e.id==payload.id?{...e,name:!payload.NewName}:e)}
        default:
        return state;
    }
        
}
export default taskreducer;