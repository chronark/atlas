// ESLint exception rule for NodeList

import React, { useState } from "react"
import { connect } from "react-redux"

import { Job } from "../types/customTypes"
import MapComponent from "./MapComponent"
interface State {
  modal: { isShowing: boolean }
  isFullsceen: boolean
}

interface StateProps {
  jobs: Job[]
}

type Props = StateProps

const App: React.FunctionComponent<Props> = props => {
  const [state, setState] = useState({
    modal: { isShowing: false },
    isFullscreen: false,
  })
  const toggleFullscreen = (): void => {
    setState(prevState => ({
      ...prevState,
      isFullscreen: !state.isFullscreen,
    }))
  }

  return (
    <div
      className={
        state.isFullscreen ? "transition-all fixed top-0 left-0 w-screen h-screen bg-white z-50" : "transition-all"
      }
    >
      <div>
        <MapComponent></MapComponent>
      </div>
    </div>
  )
}

const mapStateToProps = (state: StateProps): StateProps => ({
  jobs: state.jobs,
})

export default connect(mapStateToProps, {})(App)
