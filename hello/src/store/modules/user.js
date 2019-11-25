import {getToken, setToken} from '@/utils/auth'
import {LoginByUserName} from '@/api/login'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }

  },
  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 用户名登录
    login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        LoginByUserName(userInfo).then(response => {
          console.log('user login')
          console.log(response)
          if (!response.data) { reject(response.code); return false }
          const data = response.data
          if (data.accessToken) {
            commit('SET_TOKEN', data.accessToken)
            setToken(response.data.accessToken)
          }
          resolve(response.data.accessToken)
        }).catch(error => {
          reject(error)
        })
      })
    }

  }

}

export default user
