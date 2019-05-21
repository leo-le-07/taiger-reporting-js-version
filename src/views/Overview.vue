<template>
  <div class="home">
    <div class="header">
      <h1>Overview</h1>
    </div>
    <div class="chart-container">
      <OverviewChart />
    </div>
  </div>
</template>

<script>
import OverviewChart from '@/components/OverviewChart/index.vue'

export default {
  components: {
    OverviewChart
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  border: 1px solid $borderGray;
  border-radius: 4px;
  padding: 20px;
}
</style>
