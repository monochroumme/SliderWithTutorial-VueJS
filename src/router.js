import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/second',
      name: 'second',
      component: () => import(/* webpackChunkName: "about" */ './views/Second.vue')
    }
  ]
})
