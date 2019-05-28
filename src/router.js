import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/views/Overview.vue'
import ContentPerformance from '@/views/ContentPerformance.vue'

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
