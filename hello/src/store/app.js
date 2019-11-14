import Cookies from 'js-cookie'
import { constantRouter } from '@/router'

const app = {
  state: {
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
      withoutAnimation: false
    },
    routes: [],
    device: 'desktop',
    language: Cookies.get('language') || 'en',
    size: Cookies.get('size') || 'medium'
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = routes
    }

  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        // const { roles } = data
        commit('SET_ROUTES', constantRouter)
        resolve(constantRouter)
      })
    }

  }
}
export default app
