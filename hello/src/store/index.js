import vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './app'
vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  },
  getters
})

export default store
