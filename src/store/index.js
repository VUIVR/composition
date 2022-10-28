import { createStore } from 'vuex'

export default createStore({
  state: {
    viewMenu: false
  },
  getters: {
    getViewMenu: state => state.viewMenu
  },
  mutations: {
    viewMenu (state) {
      state.viewMenu = !state.viewMenu
    }
  },
  actions: {
    viewMenu ({commit}) {
      commit("viewMenu")
    }
  },
  modules: {
  }
})
