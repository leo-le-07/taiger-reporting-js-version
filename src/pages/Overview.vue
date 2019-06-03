<template>
  <div class="home">
    <div class="header">
      <h1>Overview</h1>
    </div>
    <div class="chart-container">
      <ChatbotUsersChart />
    </div>
    <div class="performance-container">
      <ChatbotPerformanceMetrics />
    </div>
  </div>
</template>

<script>
import ChatbotUsersChart from '@/components/ChatbotUsersChart.vue'
import ChatbotPerformanceMetrics from '@/components/ChatbotPerformanceMetrics/index.vue'

export default {
  components: {
    ChatbotUsersChart,
    ChatbotPerformanceMetrics
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  border: 1px solid $borderGray500;
  border-radius: 4px;
  padding: 20px;
}

.performance-container {
  margin-top: 40px;
}
</style>
