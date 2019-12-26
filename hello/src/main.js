// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueI18n from 'vue-i18n'

import router from './router'
import store from './store'
import './permission' // 权限控制
import './icons'
import '@/styles/index.scss'// global css
import i18n from './i18n/i18n'
import '@/mock/mock.js'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueI18n)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
