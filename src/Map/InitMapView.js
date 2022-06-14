import MapView from "@arcgis/core/views/MapView";
import InitMap from "./InitMap";
class InitMapView {
  constructor() {
    let initMap = new InitMap()
    // Create a MapView instance (for 2D viewing) and reference the map instance
    this._view = new MapView({
      map: initMap._map, // 地图创建的时候必须附带图层
      container: "viewDiv",  // References the ID of a DOM element
      center: [-100, 35], // Sets the center point of the view at a specified lon/lat
      zoom: 3 
    })
  }

  
}

export default InitMapView