import vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './app'
import tagsView from './modules/tagsView'
import user from './modules/user'
import settings from './modules/settings'
vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tagsView,
    user,
    settings
  },
  getters
})

export default store
