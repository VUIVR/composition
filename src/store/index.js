import { createStore } from 'vuex'

export default createStore({
  state: {
    viewMenu: false
  },
  getters: {
    getViewMenu: state => state.viewMenu
  },
  mutations: {
    viewMenu (state, payload) {
      state.viewMenu = payload
    }
  },
  actions: {
    viewMenu ({commit}, payload) {
      commit("viewMenu", payload)
    }
  },
  modules: {
  }
})
