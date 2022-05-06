import { useEffect, useState } from 'react'
import ReactMapGL, { Layer, Source } from 'react-map-gl'
import { LinearProgress } from '@mui/material'
import { center } from '@turf/turf'
import { useSnackbar } from 'notistack'


export default function Map() {
  const [viewport, setViewport] = useState({})
  const [loading, setLoading] = useState(true)
  const [allParks, setAllParks] = useState(null)
  const [mapControl, setMapControl] = useState({ latitude: 0, longitude: 0, zoom: 11 })
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (!allParks) {
      fetch(
        '/api/parks',
      )
        .then(resp => resp.json())
        .then(json => {

          // find center
          const { geometry: { coordinates: [longitude, latitude] } } = center(json)
          setMapControl(prev => ({ ...prev, latitude, longitude }))


          setAllParks(json)
          setLoading(false)
        })
        .catch(err => enqueueSnackbar(`${err}`, { variant: 'error' }))
    }
  }, [])


  if (loading) return <LinearProgress />

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      {...viewport}
      width='100%'
      height='100%'
      onViewportChange={setViewport}
      interactiveLayerIds={['parks']}
      onViewStateChange={(props: { viewState: { latitude: number; longitude: number, zoom: number } }) => {
        setMapControl(prev =>({ ...prev, latitude: props.viewState.latitude, longitude: props.viewState.longitude, zoom: props.viewState.zoom }))
      }}
      latitude={mapControl.latitude}
      longitude={mapControl.longitude}
      zoom={mapControl.zoom}
    >
      <Source id={'parks'} type='geojson' data={allParks!}>
        <Layer id={'parks'}
               type={'circle'}
               paint={{
                 'circle-radius': 12,
                 'circle-color': 'green',
               }}
        />
      </Source>

    </ReactMapGL>
  )
}
