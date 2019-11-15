import vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './app'
import tagsView from './modules/tagsView'
vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tagsView
  },
  getters
})

export default store
