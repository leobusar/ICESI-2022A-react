import React, { useState, useEffect } from 'react'
import {Paper, Table, TableContainer, TableCell, TableHead, TableRow, TableBody} from  '@mui/material'
//import axios from '../config/axios'
import Task from './Task'
import TaskForm from './TaskForm'
import firebase from  '../config/firebase'
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore'

function TaskList({ owner }) {
  const [tasksList, setTasksList] = useState([])
  const [taskEdit, setTaskEdit] = useState({})
  const firebaseDb = getFirestore(firebase)

  useEffect(() => {
    // axios.get("todos?_start=100&_limit=5")
    //      .then((res) => 
    //         setTasksList(res.data)
    //      )
    getTodos(firebaseDb)
      .then( (res) => setTasksList(res)) 
  }, [])

  const getTodos = async (db) => {
    const todosCol = collection(db, 'todos')
    const todosCursor = await getDocs(todosCol)
    const todoList =  todosCursor.docs.map(doc => doc.data())

    return todoList
  }

  const addTask = (task) => {
    let tasks = [...tasksList]
    if (!task.id)
        task.id = Math.floor(Math.random()*10000)
    setDoc(doc(firebaseDb, "todos", task.id+""), task)
        .then(() => {
          getTodos(firebaseDb)
          .then( (res) => setTasksList(res))
        })
    //   tasks.push(task)
    // }else{
    //   let index = tasks.findIndex( taskItem => taskItem.id === task.id )
    //   tasks[index] = task
    //   setTaskEdit({})
    
    //setTasksList(tasks)
  }

  const delTask  = (task) => {
    let tasks = [...tasksList]
    let index = tasks.findIndex( taskItem => taskItem.id === task.id )
//    tasks.push(task)
    tasks.splice(index,1)
    setTasksList(tasks)
  }

  const editTask = (task) => {
    setTaskEdit(task)
  }

  const renderTasks = () => {
    return tasksList.map(task => <Task task={task} key={task.id} delTask={delTask} editTask={editTask}/>)
  }

  console.log(owner)
  return (
    <div>
      <h1>Lista de tareas de {owner.nombre} {owner.apellido} </h1>
      <TaskForm addTask={addTask} task={taskEdit}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300, maxWidth: 700, m: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Completed</TableCell>
              <TableCell align="center">Actions</TableCell>
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