import { createStore } from 'vuex'

export default createStore({
  state: {
    englishVersion : false
  },
  getters: {
  },
  mutations: {
    setEnglishVersion (state)  {
      state.englishVersion = true
    },

    setFrenchVersion(state) {
      state.englishVersion = false
    }
  },
  actions: {
  },
  modules: {
  }
})
