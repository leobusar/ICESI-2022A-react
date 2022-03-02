import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const NavBar = () => {
  return (
    <nav>   
        <Button sx={{ marginRight: '10px'}} variant="contained"  to="/" component={RouterLink}>Home </Button>
        <RouterLink to="/">Home</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/tasks" component={RouterLink} >Tasks </Link>
        <Link to="/about" component={RouterLink} >About </Link>
    </nav>
  )
}

export default NavBar