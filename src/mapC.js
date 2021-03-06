class MapUpper {
  constructor(options) {
    this.map = null;
    this.initMap(options);
  }

  /**
   *初始化地图
   * @param {Object} options 参数配置与高德的相同
   * @memberof MapContainer
   */
  initMap(options) {
    this.map = new AMap.Map(
      options.target,
      Object.assign({
        center: [120.682817, 30.513707],
        zooms: [3, 20],
        zoom: 13,
        expandZoomRange: true,
        ...options
      })
    );
  }
}

export default MapUpper;
