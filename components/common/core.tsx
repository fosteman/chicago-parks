import { configure, makeAutoObservable } from 'mobx'
import { center, Feature, FeatureCollection } from '@turf/turf'

configure({
  enforceActions: 'never',
})

class Core {
  constructor() {
    makeAutoObservable(this)

    this.loadParks()
  }


  selectedPark: Feature | null = null
  dataSource?: FeatureCollection
  mapControl = { latitude: 0, longitude: 0, zoom: 11 }

  drawerOpen = false

  selectPark(feature: Feature) {
    if (this.selectedPark?.id === feature.id) {
      this.selectedPark = null
      this.mapControl.zoom = 11
    } else {
      this.selectedPark = feature

      // find center
      const { geometry: { coordinates: [longitude, latitude] } } = center(feature)
      this.mapControl.latitude = latitude
      this.mapControl.longitude = longitude
      this.mapControl.zoom = 14


      if (!this.drawerOpen) {
        this.drawerOpen = true
      }
    }
  }

  async loadParks(): Promise<FeatureCollection> {
    if (!this.dataSource) {
      return fetch(
        '/api/parks',
      )
        .then(resp => resp.json())
        .then((json: FeatureCollection) => {
          // create ID on each feature
          json.features = json.features.map((f, id) => ({ ...f, id }))

          // store it
          this.dataSource = json

          // find center
          const { geometry: { coordinates: [longitude, latitude] } } = center(json)
          this.mapControl.latitude = latitude
          this.mapControl.longitude = longitude

          return this.dataSource
        })
    } else {
      return this.dataSource
    }
  }
}

export default new Core()