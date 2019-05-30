import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/pages/Overview'
import ContentPerformance from '@/pages/ContentPerformance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/content-performance',
      name: 'content-performance',
      component: ContentPerformance
    }
  ]
})
