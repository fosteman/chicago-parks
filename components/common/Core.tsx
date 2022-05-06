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
}

export default new Core();