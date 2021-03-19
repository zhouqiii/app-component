import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/Home.vue'
import Life from './life/Life.vue'
import NavBar from './navbar/NavBar.vue'
Vue.use(Router)
export default new Router({
  routes: [
     {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/life',
      name: 'life',
      component: Life
    },
  ],
  
})
