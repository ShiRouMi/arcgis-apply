import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
class VectorTileLayer {
  constructor(url) {
    this._vtLayer = new VectorTileLayer(url)
  }
  // when() may be leveraged once an instance of the class is created.
  on(cb) {
    this._vtLayer?.when(() => {
      cb()
    })
  }
  // 切换图层显示或者隐藏
  toggleVisibility(layers) {
    let styleLayers = this._vtlLayer?.currentStyleInfo?.style?.layers
    styleLayers.forEach(stylelayer => {
      if(layers.indexOf(stylelayer.id) === -1) {
        this._vtlLayer.setStyleLayerVisibility(stylelayer.id, 'none')
      } else {
        this._vtlLayer.setStyleLayerVisibility(stylelayer.id, 'visible')
      }
    })
  }

  changePaintProperties(layerId) {
    const paintProperties = this._vtLayer.getPaintProperties(layerId);
    // change the fill-color paint property for the layer.
    paintProperties["fill-color"] = "#93CFC7";
    vtLayer.setPaintProperties(layerId, paintProperties);
  }

  // 对矢量切片根据属性进行唯一值渲染
  // 注意:该功能在 V4.23版本上失效;在V4.22 版本上有效
  changePaintUseMatch(layerId) {
    let styleLayers = this._vtlLayer?.currentStyleInfo?.style?.layers
    let targetLayer = styleLayers.find(layer => layer.id === layerId)
    if(!targetLayer) return 
    let paintProperties = targetLayer.paint
    // 以下读取方式会报栈溢出错误
    // const paintProperties  = this._vtlLayer.getPaintProperties(layerId);
    let matchExpression = [
      "match",
      ["get", "admincode"]
    ]
    let regionCode = []
    for(let key in regionCode) {
      // 循环获取每个区块(由属性区分)对应的值
      let color = ""
      matchExpression.push(regionCode[key], color)
    }
    matchExpression.push("rgba(0, 0, 0, 1)"); // 最后设置默认值
    paintProperties["fill-color"] = matchExpression
    this._vtlLayer.setPaintProperties(layerId,  paintProperties);
  }

  changeLayoutProperty(layerId) {
    const layoutProperties = vtLayer.getLayoutProperties(layerId);

    // change the text-transform layout property for the layer
    layoutProperties["text-transform"] = "uppercase";
    vtLayer.setLayoutProperties(layerId, layoutProperties);
  }

  changeStyleLayer(layerId) {
    let styleLayer = layer.getStyleLayer(layerId);
    styleLayer.paint["text-color"] = "#E400E0";
    styleLayer.paint["text-halo-color"] = "#E400E0";
    styleLayer.layout["icon-size"] = 1.5;
    layer.setStyleLayer(styleLayer);
  }
  
  changeStyleUseFilter() {
    const waterStyleLayers = [
      "Marine area/bathymetry depth 1/2",
      "Bathymetry/depth 5/1",
      "Bathymetry/depth 4/1",
      "Bathymetry/depth 3/1",
      "Bathymetry/depth 2 (shallow water)/1",
      "Bathymetry/depth 6/1",
      "Water area small scale/1"
    ];
    tileLayerStyle.filter = ["any",["==", "Origin", airport],["==", "Dest", airport]];
  }
}