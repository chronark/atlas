
export default {
  addItem(store: Store, payload: any): void {
    store.commit("addItem", payload)
  },
  clearItem(store: Store, payload: any) {
    store.commit("clearItem", payload)
  },
}