import React from 'react'
// import AppBar from '@mui/material/AppBar'
import { Toolbar, AppBar, Grid, Box, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' color='inherit' component='div'>
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
