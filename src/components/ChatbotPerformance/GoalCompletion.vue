<template>
  <div class="vue-container">
    <PerformanceCard
      title="Goal Completion"
      :isPositivePercentage="true"
      percentageValue="3.21"
    >
      <div class="display-value" slot="value">
        46
      </div>
    </PerformanceCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PerformanceCard from '@/components/common/PerformanceCard.vue'

export default {
  components: {
    PerformanceCard
  },
  computed: {
    ...mapGetters('chatbotPerformance', {
      data: 'goalCompletion'
    })
  }
}
</script>
