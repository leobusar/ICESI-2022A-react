import React, { useState } from 'react'
import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material'

const  TaskForm = ({addTask}) => {
    const [ taskEdit, setTaskEdit ] = useState({title: ""});
    const [ completed, setCompleted ] = useState(false);

    const handleChange = (event) => {
        setTaskEdit({
            ...taskEdit,
            [event.target.name] : event.target.value})
    }

    const handleChangeC = (event) => {
        setCompleted(event.target.checked)
    }

    const handleClick = () => {
        let id = Math.floor(Math.random()*10000)
        const task =  { id, title: taskEdit.title, completed, userId: 1}
        //console.log(task)
        setTaskEdit({title: ""})
        setCompleted(false)
        addTask(task)
    }

  return (
    <form noValidate autoComplete='off'>

        <TextField id="standard-basic" name="title" variant="standard"  value={taskEdit.title} onChange={handleChange} />
        <FormControlLabel control={
                <Checkbox defaultChecked name="terminada" color="primary" 
                          checked={completed} onChange={handleChangeC} />
                } 
                label="Completed" />

        <Button variant="contained" color="primary" onClick={handleClick} >
            Agregar
        </Button>

    </form>
  )
}

export default TaskForm
