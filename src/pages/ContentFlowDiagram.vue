<template>
  <div class="home">
    <div class="header">
      <h1>Flow Diagram</h1>
    </div>
    <div class="metrics-container">
      <ContentFlowDiagramMetrics />
    </div>
  </div>
</template>

<script>
import { routeConstants } from '@/constants'

import ContentFlowDiagramMetrics from '@/components/ContentFlowDiagramMetrics/index'

export default {
  created () {
    this.$store.commit('breadcrumb/setItems', {
      items: [
        {
          text: routeConstants.contentPerformance.title,
          to: { name: routeConstants.contentPerformance.name }
        },
        {
          text: routeConstants.contentFlowDiagram.title,
          active: true
        }
      ]
    })
    this.$store.dispatch('contentFlowDiagram/getFlowDiagramData', {
      id: this.$route.params.id
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('contentFlowDiagram/clearIntentId')
    this.$store.commit('breadcrumb/clearItems')
    next()
  },
  components: {
    ContentFlowDiagramMetrics
  }
}
</script>

<style lang="scss" scoped>
.metrics-container {
  margin-top: 30px;
}
</style>
