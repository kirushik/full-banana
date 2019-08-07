import Vue from 'vue'
import Router from 'vue-router'
import Print from './views/Print.vue'
import Scan from './views/Scan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'print',
      component: Print
    },
    {
      path: '/scan',
      name: 'scan',
      component: Scan
    }
  ]
})
