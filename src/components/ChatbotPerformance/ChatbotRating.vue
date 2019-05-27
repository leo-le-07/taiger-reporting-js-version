<template>
  <div class="vue-container">
    <PerformanceCard
      :title="data.title"
      :isPositivePercentage="data.isPositivePercentage"
      :percentageValue="data.percentageValue"
    >
      <div class="display-value" slot="value">
        {{ data.value }}
        <span class="sub-value">/{{ data.total }}</span>
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
      data: 'chatbotRating'
    })
  }
}
</script>

<style lang="scss" scoped>
.sub-value {
  font-size: 16px;
}
</style>
