import React, { useState, useEffect } from 'react'
import {Paper, Table, TableContainer, TableCell, TableHead, TableRow, TableBody} from  '@mui/material'
import Task from './Task'
import TaskForm from './TaskForm'

function TaskList({ owner }) {
  const [tasksList, setTasksList] = useState([])

  useEffect(() => {
    let tasks = [{
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
    ]

    setTasksList(tasks)
  }, [])

  const addTask = (task) => {
    let tasks = [...tasksList]
    tasks.push(task)
    setTasksList(tasks)
  }
  const renderTasks = () => {
    return tasksList.map(task => <Task task={task} key={task.id} />)
  }

  console.log(owner)
  return (
    <div>
      <h1>Lista de tareas de {owner.nombre} {owner.apellido} </h1>
      <TaskForm addTask={addTask}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300, maxWidth: 700, m: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTasks()}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default TaskList