import { useEffect, useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { LinearProgress } from '@mui/material'
import { center, Feature, Geometry } from '@turf/turf'
import { useSnackbar } from 'notistack'
import core from './common/core'
import { observer } from 'mobx-react'


export default observer(() => {
  const [viewport, setViewport] = useState({})
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    core.loadParks().catch(err => enqueueSnackbar(`${err}`, { variant: 'error' }))
  }, [])


  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      {...viewport}
      width='100%'
      height='100%'
      onViewportChange={setViewport}
      onViewStateChange={(props: { viewState: { latitude: number; longitude: number, zoom: number } }) => {
        core.mapControl = props.viewState
      }}
      viewState={core.mapControl}
    >
      {core.dataSource?.features.map((feature: Feature, index: number) => (
        <Marker
          key={`marker-${index}`}
          latitude={((feature.geometry as Geometry).coordinates[1] as number)}
          longitude={((feature.geometry as Geometry).coordinates[0] as number)}
          // anchor="bottom"
          onClick={(e: any) => {
            e.stopPropagation()

            core.selectPark(feature)
          }}
        >
          <img style={core.selectedPark?.id === feature.id ? { filter: `invert(1)` } : {}}
               src={'https://www.nicepng.com/png/detail/519-5195611_park-icon-the-noun-project.png'} height={32}
               width={32} />
        </Marker>
      ))}

    </ReactMapGL>
  )
})
