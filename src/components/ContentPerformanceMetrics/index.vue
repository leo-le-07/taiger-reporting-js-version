<template>
  <div class="vue-container">
    <b-row>
      <b-col sm="3">
        <TotalFallbackCount />
      </b-col>
      <b-col sm="3">
        <OverallConfusionRate />
      </b-col>
      <b-col sm="3">
        <NoMessagesSent />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TotalFallbackCount from './TotalFallbackCount'
import OverallConfusionRate from './OverallConfusionRate'
import NoMessagesSent from './NoMessagesSent'

export default {
  components: {
    TotalFallbackCount,
    OverallConfusionRate,
    NoMessagesSent
  },
  created () {
    this.$store.dispatch('contentPerformance/getPerformanceData')
  }
}
</script>
