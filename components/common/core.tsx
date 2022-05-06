import { configure, makeAutoObservable } from "mobx";
import { Feature, FeatureCollection } from '@turf/turf'

configure({
  enforceActions: "never",
});

class Core {
  constructor() {
    makeAutoObservable(this);
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
}

export default new Core();