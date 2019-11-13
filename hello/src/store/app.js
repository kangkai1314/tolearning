import Cookies from 'js-cookie'
import { constantRoutes } from '@/router'

const app = {
  state: {
    sidebar: {},
    routes: [],
    device: 'desktop',
    language: Cookies.get('language') || 'en',
    size: Cookies.get('size') || 'medium'
  },
  mutations: {

  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        // const { roles } = data
        commit('SET_ROUTES', constantRoutes)
        resolve(constantRoutes)
      })
    },

  }
}
export default app
