import { Component } from 'react'
import ReactMapGL from 'react-map-gl'

type MapViewport = {
  width: string
  height: string
  latitude: number
  longitude: number
  zoom: number
}

export default class Map extends Component {
  state = {
    viewport: {},
  }

  onViewportChange = (viewport: MapViewport) => {
    const { width, height, ...etc } = viewport
    this.setState({ viewport: etc })
  }

  render() {
    const { viewport } = this.state
    return (
      <ReactMapGL
        width="100%"
        height="100%"
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoid2lsZGt5IiwiYSI6ImNrdXRzamJ3czA5OXYyb2xmcmVjcWlmaHgifQ.8M22Z9gqiVxCkFCik-lCjw"
        onViewportChange={(viewport: MapViewport) => this.onViewportChange(viewport)}
      />
    )
  }
}
