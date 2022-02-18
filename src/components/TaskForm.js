import React, { useState, useEffect } from 'react'
import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material'

const  TaskForm = ({addTask, task}) => {
    const [ taskEdit, setTaskEdit ] = useState({title: "", completed: false});

    useEffect( ()=> {
        setTaskEdit(task)
    }, [task])

    const handleChange = (event) => {
        setTaskEdit({
            ...taskEdit,
            [event.target.name] : event.target.value})
    }

    const handleChangeC = (event) => {
        setTaskEdit({
            ...taskEdit,
            completed: event.target.checked})

        //setCompleted(event.target.checked)
    }

    const handleClick = () => {
        //let id = Math.floor(Math.random()*10000)
        const task =  {...taskEdit}
        //console.log(task)
        setTaskEdit({title: "", completed: false})
        addTask(task)
    }

  return (
    <form noValidate autoComplete='off'>

        <TextField id="standard-basic" name="title" variant="standard"  value={taskEdit.title} onChange={handleChange} />
        <FormControlLabel control={
                <Checkbox defaultChecked name="terminada" color="primary" 
                          checked={taskEdit.completed} onChange={handleChangeC} />
                } 
                label="Completed" />

        <Button variant="contained" color="primary" onClick={handleClick} >
            { task.id?"Actualizar":"Agregar"}
        </Button>

    </form>
  )
}

export default TaskForm
