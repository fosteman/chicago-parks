import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import core from './common/core'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'


export default observer(() => {
  console.log(toJS(core.selectedPark?.properties))
  return (
    <>
      <Drawer
        anchor='right'
        open={core.drawerOpen}
        onClose={() => core.drawerOpen = false}
        variant='persistent'
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='close-menu'
            sx={{ mr: 2 }}
            onClick={() => core.drawerOpen = false}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Toolbar>

        {core.selectedPark ? <Box sx={{ width: 300, p: 1 }}>
            <Typography variant='h4' sx={{ mb: 2 }}>
              {core.selectedPark?.properties!.title}
            </Typography>

            <Typography>
              {core.selectedPark?.properties!.description}
            </Typography>
          </Box> :

          <Box sx={{  width: 300, height: '100%', display: 'flex', alignItems:'center', textAlign: 'center' }}>
            <Typography>
              Select a Chicago park
              on the map to see info about it!
            </Typography>
          </Box>
        }

      </Drawer>
    </>
  )
})
