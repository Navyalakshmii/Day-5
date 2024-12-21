
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h5'>empapp</Typography>
                  <Link to='/Add'>
                      <Button variant='contained'>Add</Button>
                  </Link>
                  <Link to='/View'>
                      <Button variant='contained'>View</Button>
                  </Link>
              </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default Navbar