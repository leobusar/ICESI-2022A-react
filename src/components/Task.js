import React from 'react'
import {TableCell, TableRow } from  '@mui/material'


function Task({ task }) {
  return (
    <TableRow>
      <TableCell>{task.id}</TableCell>
      <TableCell align="right">{task.title}</TableCell>
      <TableCell align="right">{task.completed?"yes":"no"}</TableCell>
    </TableRow>
  )
}

export default Task