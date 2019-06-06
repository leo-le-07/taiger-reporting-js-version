<template>
  <div class="home">
    <div class="header">
      <h1>Conversations</h1>
    </div>
  </div>
</template>

<script>
import { routeConstants } from '@/constants'

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
          to: { name: routeConstants.contentFlowDiagram.name }
        },
        {
          text: routeConstants.contentConversations.title,
          active: true
        }
      ]
    })
    this.$store.commit('contentPerformance/setIntentId', {
      id: this.$route.params.id
    })
  }
}
</script>

<style>

</style>
