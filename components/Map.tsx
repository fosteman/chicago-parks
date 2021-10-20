import { useState } from 'react'
import ReactMapGL from 'react-map-gl'

type MapViewport = {
  width: string
  height: string
  latitude: number
  longitude: number
  zoom: number
}

export default function Map() {
  const [viewport, setViewport] = useState({})

  return (
    <ReactMapGL
      mapboxApiAccessToken="pk.eyJ1Ijoid2lsZGt5IiwiYSI6ImNrdXRzamJ3czA5OXYyb2xmcmVjcWlmaHgifQ.8M22Z9gqiVxCkFCik-lCjw"
      {...viewport}
      width="100vw"
      height="100vh"
      onViewportChange={setViewport}
    />
  )
}
