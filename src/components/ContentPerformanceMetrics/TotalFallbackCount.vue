<template>
  <div class="vue-container">
    <CardPlaceholder title="Total Fallback Count">
      <div class="display-value" slot="value">
        {{ metrics.totalFallbackCount }}
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
