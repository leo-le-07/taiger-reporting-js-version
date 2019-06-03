const state = {
  items: []
}

const mutations = {
  setItems (state, { items }) {
    state.items = items
  },
  clearItems (state) {
    state.items = []
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
