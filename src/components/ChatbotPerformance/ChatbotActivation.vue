<template>
  <div class="vue-container">
    <PerformanceCard
      title="Chatbot Activation %"
      :isPositivePercentage="true"
      percentageValue="4.57"
    >
      <div class="display-value" slot="value">
        42.20%
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
