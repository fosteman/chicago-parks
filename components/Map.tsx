import { useEffect, useState } from 'react'
import ReactMapGL from 'react-map-gl'

export default function Map() {
  const [viewport, setViewport] = useState({})

  const [allData, setAllData] = useState(null);

  useEffect(() => {
    fetch(
      '/api/parks'
    )
      .then(resp => resp.json())
      .then(json => setAllData(json))
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line
  }, []);


  console.log(allData)
  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={setViewport}
    />
  )
}
