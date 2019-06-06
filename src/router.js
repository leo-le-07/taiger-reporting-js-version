import Vue from 'vue'
import Router from 'vue-router'

import Overview from '@/pages/Overview'
import ContentPerformance from '@/pages/ContentPerformance'
import ContentFlowDiagram from '@/pages/ContentFlowDiagram'
import ContentConversations from '@/pages/ContentConversations'

import { routeConstants } from '@/constants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: routeConstants.overview.path,
      name: routeConstants.overview.name,
      component: Overview
    },
    {
      path: routeConstants.contentPerformance.path,
      name: routeConstants.contentPerformance.name,
      component: ContentPerformance,
      children: [
        {
          path: routeConstants.contentFlowDiagram.path,
          name: routeConstants.contentFlowDiagram.name,
          component: ContentFlowDiagram
        },
        {
          path: routeConstants.contentConversations.path,
          name: routeConstants.contentConversations.name,
          component: ContentConversations
        }
      ]
    }
  ]
})
