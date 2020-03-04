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
//   /*
//     Updating redux jobs from country select
//   */
//   useEffect(() => {
//     let newShownJobs: Job[] = []
//     if (props.countries.selectedCountries.length === 0) {
//       newShownJobs = props.allJobsJobs
//     } else {
//       newShownJobs = filterJobs(props.allJobsJobs, { countries: props.countries.selectedCountries })
//     }

//     props.setShownJobs(newShownJobs)
//   }, [props.countries.selectedCountries, props.allJobsJobs])

//   /*
//     Updating Jobs on map
//   */
//   useEffect(() => {
//     // Check if map is defined yet, because this hook runs at init
//     if (map) {
//       map.setJobs(props.jobs.shownJobs)
//     }
//   }, [props.jobs.shownJobs])

//   return <div id={MAP_ID} style={{ height: "500px" }}></div>
// }

// const mapStateToProps = (state: StateProps): StateProps => ({
//   jobs: state.jobs,
//   search: state.search,
//   countries: state.countries,
// })

// const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
//   setShownJobs: (jobs: Job[]) => dispatch(setShownJobs(jobs)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(MapComponent)
