import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskCard from './TaskCard'
import { Button, Form, Modal } from 'react-bootstrap'
import { addtask } from '../JS/Actions/TaskActions'

const TaskList = () => {
    const Tasks=useSelector((state)=>state.taskreducer.listeTask)
    const dispatch=useDispatch()
    const [name,setName]=useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant='primary' onClick={handleShow}>Add Task</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input placeholder='add new task' onChange={(e)=>setName(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" onClick={()=> (dispatch(addtask({id:Math.random(),name:name,isDone:false})),handleClose())}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>

        {Tasks.map((task)=><TaskCard task={task} key={task.id}/>)}
    </div>
  )
}

export default TaskList