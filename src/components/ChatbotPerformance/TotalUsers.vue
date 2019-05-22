<template>
  <div class="vue-container">
    <PerformanceCard
      title="Total Users"
      :isPositivePercentage="true"
      percentageValue="12.54"
    >
      <div class="display-value" slot="value">
        4,348
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
