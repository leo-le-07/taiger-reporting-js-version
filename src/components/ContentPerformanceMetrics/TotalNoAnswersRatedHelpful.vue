<template>
  <div class="vue-container">
    <CardPlaceholder title="Total No. of Answers rated helpful">
      <div class="display-value" slot="value">
        {{ metrics.totalNoAnswerRatedHelpful }}
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
