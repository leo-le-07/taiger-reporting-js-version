<template>
  <div class="vue-container">
    <PerformanceCard
      title="Deflection Rate"
      :isPositivePercentage="true"
      percentageValue="1.17"
    >
      <div class="display-value" slot="value">
        58.37%
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
