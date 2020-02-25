import "../../static/css/ol-ext.css"
import "../../static/css/ol.css"
import "../../static/css/tailwind.css"
import Store from "./store"

import Map from "./map"

const map = new Map("map-container")

const initialState = {
  items: ["I made this", "Another thing"],
}

const actions = {
  addItem(store: Store, payload: any): void {
    store.commit("addItem", payload)
  },
  clearItem(store: Store, payload: any) {
    store.commit("clearItem", payload)
  },
}

const mutations = {
  addItem(state: Record<string, any>, payload: any) {
    state.items.push(payload)

    return state
  },
  clearItem(state: Record<string, any>, payload: any) {
    state.items.splice(payload.index, 1)

    return state
  },
}
const store = new Store(actions, mutations, initialState)

store.getEvents().subscribe("stateChange", () => console.log(store.getState()))
console.log(store.getState())
const index = 0
store.dispatch("clearItem", { index })
