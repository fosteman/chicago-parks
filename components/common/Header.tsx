import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import core from './core'


export default () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Chicago Parks
          </Typography>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open-menu'
            sx={{ mr: 2 }}
            onClick={() => core.drawerOpen = true}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
