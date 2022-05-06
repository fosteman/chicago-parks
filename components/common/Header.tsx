import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import core from './core'
import { useRouter } from 'next/router'
import { MapOutlined } from '@mui/icons-material'


export default () => {
  const router = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>

          {router.pathname === '/' && <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open-menu'
            sx={{ mr: 2 }}
            onClick={() => router.push('/list')}
          >
            <MenuIcon />
          </IconButton>}
          {router.pathname === '/list' && <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open-menu'
            sx={{ mr: 2 }}
            onClick={() => router.push('/')}
          >
            <MapOutlined />
          </IconButton>}

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
