<template>
  <div class="vue-container">
    <b-row>
      <b-col sm="3">
        <TotalFallbackCount />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TotalFallbackCount from './TotalFallbackCount'

export default {
  components: {
    TotalFallbackCount
  },
  created () {
    this.$store.dispatch('contentPerformance/getPerformanceData')
  }
}
</script>

