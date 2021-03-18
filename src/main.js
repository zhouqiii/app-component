import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './plugins/element.js'
import './plugins/iconfont.js'
import 'swiper/dist/css/swiper.css'
import './css/iconfont.css'
import axios from 'axios'
import ElementUI from 'element-ui'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
