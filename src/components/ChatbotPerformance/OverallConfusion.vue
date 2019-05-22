<template>
  <div class="vue-container">
    <PerformanceCard
      title="Overall Confusion"
      :isPositivePercentage="false"
      percentageValue="11.68"
    >
      <div class="display-value" slot="value">
        39.43%
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
