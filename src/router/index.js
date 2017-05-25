import Vue from 'vue'
import Router from 'vue-router'
import 'es6-promise/auto'
import layout from '../layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // component: resolve => require(['../layout.vue'], resolve)
      component: layout
    }
  ]
})
