import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import i18n from '@/plugins/i18n' // 导入vue-i18n
Vue.prototype.$axios = axios 

Vue.config.productionTip = false

new Vue({
  router,
  i18n, // 此处需要挂载上i18n，不要忘记
  render: h => h(App),
}).$mount('#app')
