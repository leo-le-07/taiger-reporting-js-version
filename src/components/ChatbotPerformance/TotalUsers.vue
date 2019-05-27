<template>
  <div class="vue-container">
    <PerformanceCard
      :title="data.title"
      :isPositivePercentage="data.isPositivePercentage"
      :percentageValue="data.percentageValue"
    >
      <div class="display-value" slot="value">
        {{ data.value }}
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
      data: 'totalUsers'
    })
  }
}
</script>
