import { createStore } from 'vuex'

export default createStore({
  state: {
    englishVersion : false,
    updateWidthInner : true,
    //window.innerWidth : 0
  },
  getters: {
  },
  mutations: {
    setEnglishVersion (state)  {
      state.englishVersion = true
    },

    setFrenchVersion(state) {
      state.englishVersion = false
    },

    setUpdateWebWidthInner(state) {
      state.updateWidthInner = true
      window.innerWidth = 1440;
      //window.innerWidth = 1440
    }
  },
  actions: {
  },
  modules: {
  }
})
