<template>
  <div class="vue-container">
    <CardPlaceholder
      :title="data.title"
      :isPositivePercentage="data.isPositivePercentage"
      :percentageValue="data.percentageValue"
    >
      <div class="display-value" slot="value">
        {{ data.value }}
        <span class="sub-value">/{{ data.total }}</span>
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
