import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import rootReducer from "."

const initialState = {}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
// Hook for showing jobs

export default store
