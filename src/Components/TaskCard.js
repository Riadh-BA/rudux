import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletetask, donetask, edittask } from '../JS/Actions/TaskActions'
import { Button } from 'react-bootstrap'

const TaskCard = ({task}) => {
    const dispatch=useDispatch()
    const [edit,setEdit]=useState(false)
    const [name,setName]=useState("")
   
  return (
    <div style={{display:'flex',justifyContent:'space-around',margin:'30px'}}>
        
        {edit?<input type='text' value={task.name} placeholder='enter your name' onChange={(e)=>setName(e.target.value)}></input>:<p>{task.name}</p>}
        
        {edit? <Button onClick={()=>(dispatch(edittask(task.id,name)),setEdit(false))}>Save</Button>: <Button onClick={()=>setEdit(true)}>Edit</Button>}
        
        <Button onClick={()=>dispatch(deletetask(task.id))}>Delete</Button>
        <Button onClick={()=>dispatch(donetask(task.id))} variant={task.isDone?"success":"danger"}>{task.isDone?<span>Make it unDone</span>:<span>Make it Done</span>}</Button>
    </div>
  )
}

export default TaskCard