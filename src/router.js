import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/Home.vue'
import Life from './life/Life.vue'
import Sport from './sport/Sport.vue'
import Card from './card/Card.vue'
import MyHome from './myhome/MyHome.vue'
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
    {
      path: '/sport',
      name: 'sport',
      component: Sport
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/myhome',
      name: 'myhome',
      component: MyHome
    },
  ],
  
})
