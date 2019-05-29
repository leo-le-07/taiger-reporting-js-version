<template>
  <div class="home">
    <div class="header">
      <h1>Content Performance</h1>
    </div>
    <div class="metrics-container">
      <ContentPerformanceMetrics />
    </div>
    <div class="content-details-container">
      <ContentDetails />
    </div>
  </div>
</template>

<script>
import ContentDetails from '@/components/ContentDetails.vue'
import ContentPerformanceMetrics from '@/components/ContentPerformanceMetrics/index.vue'

export default {
  components: {
    ContentDetails,
    ContentPerformanceMetrics
  }
}
</script>

<style lang="scss" scoped>
.content-details-container {
  margin-top: 20px;
}
</style>
