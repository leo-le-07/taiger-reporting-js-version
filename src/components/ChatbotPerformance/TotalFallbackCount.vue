<template>
  <div class="vue-container">
    <PerformanceCard
      title="Total Fallback Count"
      :isPositivePercentage="false"
      percentageValue="9.15"
    >
      <div class="display-value" slot="value">
        483
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
