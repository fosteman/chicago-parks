import { Box } from '@mui/system'
import type { NextPage } from 'next'
import Header from '../components/common/Header'
import Map from '../components/Map'
import MapDrawer from '../components/MapDrawer'
import core from '../components/common/core'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box display='flex'>
        <Box flexShrink={0}>
          <MapDrawer />
        </Box>
        <Box flexGrow={1} sx={{ height: '100vh', width: '100vw' }}>
          <Map />
        </Box>
      </Box>
    </>
  )
}

export default Home
