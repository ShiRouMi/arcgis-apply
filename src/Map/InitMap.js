import Map from "@arcgis/core/Map";

class InitMap {
  constructor() {
    this._map = new Map({
      basemap: "streets-vector"
    })
  }

  findLayer(layerTitle) {
    const layer = this._map.allLayers.find(function(layer) {
      return layer.title === layerTitle;
     })
     return layer
  }

  removeLayerByTitle(layerTitle) {
    let layer = this.findLayer(layerTitle)
    this._map.remove(layer)
  }

  removeLayerById(layerId) {
    let layer = this._map.findLayerById(layerId)
    this._map.remove(layer)
  }

  destroyMap() {
    // prevent the layers from being destroyed by removing them from the map
    const layers = this._map.layers.removeAll();

    // unset basemap from the map so that it is not destroyed
    const basemap = this._map.basemap;
    this._map.basemap = null;

    // destroy the map and any remaining associated resources
    this._map.destroy();
  }
}

export default InitMap