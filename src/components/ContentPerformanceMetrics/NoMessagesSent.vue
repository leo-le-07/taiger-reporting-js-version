<template>
  <div class="vue-container">
    <CardPlaceholder title="No. of Messages Sent by User">
      <div class="display-value" slot="value">
        {{ metrics.noMessageSentByUser }}
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
