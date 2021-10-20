import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

type Props = {
  setDrawerOpen: (open: boolean) => void
}

export default function Header({ setDrawerOpen }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chicago Parks
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open-menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
