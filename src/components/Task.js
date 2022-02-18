import React from 'react'
import {TableCell, TableRow } from  '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'


function Task({ task, delTask, editTask }) {
  return (
    <TableRow>
      <TableCell>{task.id}</TableCell>
      <TableCell align="right">{task.title}</TableCell>
      <TableCell align="right">{task.completed?"yes":"no"}</TableCell>
      <TableCell align="right">
        <DeleteIcon color="error" onClick={ ()=> {delTask(task)} }/> &nbsp;
        <EditIcon color="primary" onClick={ ()=> {editTask(task)} }/>        
      </TableCell>

    </TableRow>
  )
}

export default Task