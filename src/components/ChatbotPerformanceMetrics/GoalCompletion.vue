<template>
  <div class="vue-container">
    <CardPlaceholder
      title="Goal Completion"
      :isPositivePercentage="true"
      percentageValue="3.21"
    >
      <div class="display-value" slot="value">
        46
      </div>
    </CardPlaceholder>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CardPlaceholder from '@/components/ChatbotPerformanceMetrics/CardPlaceholder.vue'

export default {
  components: {
    CardPlaceholder
  },
  computed: {
    ...mapGetters('chatbotPerformance', {
      data: 'goalCompletion'
    })
  }
}
</script>
