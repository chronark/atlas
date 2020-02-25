// import React, { useEffect, useState } from "react"
// import { connect } from "react-redux"
// import { ThunkDispatch } from "redux-thunk"
// import MapClass from "../lib/map"
// import Nominatim from "../lib/apis/nominatim"
// import { setShownJobs } from "../redux/jobs/actions"
// import { Job } from "../types/customTypes"
// import { filterJobs } from "../lib/geometryFilter"
// import Charon from "../lib/apis/charon"
// interface DispatchProps {
//   setShownJobs: (jobs: Job[]) => void
// }

// interface StateProps {
//   jobs: {
//     allJobs: Job[]
//     shownJobs: Job[]
//   }
//   search: {
//     query: string
//   }
//   countries: {
//     selectedCountries: Record<string, any>[]
//   }
// }

// // interface OwnProps {}
// type Props = StateProps & DispatchProps
// const MapComponent: React.FunctionComponent<Props> = props => {
//   const MAP_ID = "map"
//   const [isRendered, setIsRendered] = useState<boolean>(false)
//   const [map, setMap] = useState()
//   /*
//     Render map
//   */
//   useEffect(() => {
//     /*
//      the state setter is running asynchronous, so there can be a racecondition
//     where 'isRendered' could be set before 'map'
//     */
//     const init = async (): Promise<void> => {
//       const newMap = new MapClass(MAP_ID)
//       await setMap(newMap)
//       setIsRendered(true)
//     }
//     init()
//   }, [])

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

//   useEffect(() => {
//     if (map) {
//       map.countryLayerFromGeometry(props.countries.selectedCountries)
//     }
//   }, [props.countries.selectedCountries])

//   /*
//     Updating redux jobs from country select
//   */
//   useEffect(() => {
//     let newShownJobs: Job[] = []
//     if (props.countries.selectedCountries.length === 0) {
//       newShownJobs = props.jobs.allJobs
//     } else {
//       newShownJobs = filterJobs(props.jobs.allJobs, { countries: props.countries.selectedCountries })
//     }

//     props.setShownJobs(newShownJobs)
//   }, [props.countries.selectedCountries, props.jobs.allJobs])

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
