<template>
  <div class="home">
    <div class="header">
      <h1>Overview</h1>
    </div>
    <div class="chart-container">
      <ChatbotUsersChart />
    </div>
    <div class="performance-container">
      <ChatbotPerformance />
    </div>
  </div>
</template>

<script>
import ChatbotUsersChart from '@/components/ChatbotUsersChart/index.vue'
import ChatbotPerformance from '@/components/ChatbotPerformance/index.vue'

export default {
  components: {
    ChatbotUsersChart,
    ChatbotPerformance
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  border: 1px solid $borderGray;
  border-radius: 4px;
  padding: 20px;
}

.performance-container {
  margin-top: 40px;
}
</style>
