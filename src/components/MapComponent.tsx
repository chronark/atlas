//   /*
//     Fetching Nominatim data
//   */
//   useEffect(() => {
//     const fetchForwardGeocoding = async (): Promise<void> => {
//       if (props.search.query.length > 0) {
//         const geojson = await new Charon().forwardGeocoding(props.search.query)
//         map.addFeatureFromGeojson(geojson)
//         const layers = map.getLayersByNames(["featureLayer"])
//         if (layers.length === 1) {
//           map.zoomToLayer(layers[0])
//         }
//       }
//     }
//     fetchForwardGeocoding()
//   }, [props.search.query])

//