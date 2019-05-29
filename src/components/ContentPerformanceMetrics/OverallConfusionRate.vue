<template>
  <div class="vue-container">
    <CardPlaceholder
      title="Overall Confusion Rate"
    >
      <div class="display-value" slot="value">
        {{ metrics.overallConfusionRate.value }}
      </div>
    </CardPlaceholder>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CardPlaceholder from '@/components/ContentPerformanceMetrics/CardPlaceholder.vue'

export default {
  components: {
    CardPlaceholder
  },
  computed: {
    ...mapGetters('contentPerformance', ['metrics'])
  }
}
</script>
