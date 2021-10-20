import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'

type Props = {
  drawerWidth: number
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
}

export default function MapDrawer({ drawerWidth, drawerOpen, setDrawerOpen }: Props) {
  return (
    <>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant="persistent"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="close-menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(false)}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Toolbar>
        <Box sx={{ width: drawerWidth }} role="presentation" display="flex" justifyContent="center">
          <Typography variant="h6" color="textSecondary" sx={{ mt: 10 }}>
            bananas
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}
