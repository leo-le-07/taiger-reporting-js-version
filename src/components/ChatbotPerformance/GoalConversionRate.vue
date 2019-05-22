<template>
  <div class="vue-container">
    <PerformanceCard
      title="Goal Conversion Rate"
      :isPositivePercentage="true"
      percentageValue="1.64"
    >
      <div class="display-value" slot="value">
        19.54%
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
