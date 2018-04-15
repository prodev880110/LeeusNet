import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/home/home').default
    },
    {
      path: '/markdown',
      name: 'mark-down',
      component: require('@/components/MarkDown/MarkDown').default
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
