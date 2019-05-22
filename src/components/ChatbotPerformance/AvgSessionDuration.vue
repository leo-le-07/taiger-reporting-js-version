<template>
  <div class="vue-container">
    <PerformanceCard
      title="Avg. Session Duration"
      :isPositivePercentage="false"
      percentageValue="5.12"
    >
      <div class="display-value" slot="value">
        00:18:32
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
