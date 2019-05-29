<template>
  <div class="vue-container">
    <CardPlaceholder
      :title="data.title"
      :isPositivePercentage="data.isPositivePercentage"
      :percentageValue="data.percentageValue"
    >
      <div class="display-value" slot="value">
        {{ data.value }}
      </div>
    </CardPlaceholder>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CardPlaceholder from '@/components/ChatbotPerformance/CardPlaceholder.vue'

export default {
  components: {
    CardPlaceholder
  },
  computed: {
    ...mapGetters('chatbotPerformance', {
      data: 'goalConversionRate'
    })
  }
}
</script>
