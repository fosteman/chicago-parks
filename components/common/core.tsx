import { configure, makeAutoObservable } from 'mobx'
import { Feature, FeatureCollection } from '@turf/turf'

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

  drawerOpen = false

  selectPark(feature: Feature) {
    if (this.selectedPark?.id === feature.id) {
      this.selectedPark = null
    } else {
      this.selectedPark = feature

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

          return this.dataSource
        })
    } else {
      return this.dataSource
    }
  }
}

export default new Core()