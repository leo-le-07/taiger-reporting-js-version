<template>
  <div class="vue-container">
    <CardPlaceholder title="Total No. of Answers rated helpful">
      <div class="display-value" slot="value">
        {{ metrics.totalNoAnswerRatedHelpful }}
      </div>
      <div slot="footer">
        <TextAsLink value="View" />
      </div>
    </CardPlaceholder>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TextAsLink from '@/components/common/TextAsLink'
import CardPlaceholder from '@/components/ContentPerformanceMetrics/CardPlaceholder'

export default {
  components: {
    TextAsLink,
    CardPlaceholder
  },
  computed: {
    ...mapGetters('contentPerformance', ['metrics'])
  }
}
</script>
