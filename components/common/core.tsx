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
  allParks?: FeatureCollection

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
    if (!this.allParks) {
      return fetch(
        '/api/parks',
      )
        .then(resp => resp.json())
        .then((json: FeatureCollection) => {
          // create ID on each feature
          json.features = json.features.map((f, id) => ({ ...f, id }))

          // store it
          this.allParks = json

          return this.allParks
        })
    } else {
      return this.allParks
    }
  }
}

export default new Core()