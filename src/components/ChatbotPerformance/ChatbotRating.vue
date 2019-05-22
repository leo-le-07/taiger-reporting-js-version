<template>
  <div class="vue-container">
    <PerformanceCard
      title="Chatbot Rating"
      :isPositivePercentage="false"
      percentageValue="0.02"
    >
      <div class="display-value" slot="value">
        3.98
        <span class="sub-value">/5</span>
      </div>
    </PerformanceCard>
  </div>
</template>

<script>
import PerformanceCard from '@/components/common/PerformanceCard.vue'

export default {
  components: {
    PerformanceCard
  }
}
</script>

<style lang="scss" scoped>
.sub-value {
  font-size: 16px;
}
</style>
