<template>
  <div class="vue-container">
    <b-row>
      <b-col>
        <div class="intent-name">
          Intent: {{intentName}}
        </div>
      </b-col>
    </b-row>
    <div class="metrics-container">
      <b-row>
        <b-col sm="2">
          <CardPlaceholder title="Times Asked" :value="metrics.timesAsked" />
        </b-col>
        <b-col sm="2">
          <CardPlaceholder title="Flow Completion Rate" :value="metrics.flowCompletionRate" />
        </b-col>
        <b-col sm="2">
          <CardPlaceholder title="Fallback Count" :value="metrics.fallbackCount" />
        </b-col>
        <b-col sm="2">
          <CardPlaceholder title="Confusion Rate" :value="metrics.confusionRate" />
        </b-col>
        <b-col sm="2">
          <CardPlaceholder title="Dropoff Rate" :value="metrics.dropoffRate" />
        </b-col>
        <b-col sm="2">
          <CardPlaceholder title="Positive Rating" :value="metrics.positiveRating" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import CardPlaceholder from '@/components/ContentFlowDiagramMetrics/CardPlaceholder'

export default {
  components: {
    CardPlaceholder
  },
  computed: {
    ...mapState({
      intentName: state => state.contentFlowDiagram.name
    }),
    ...mapGetters('contentFlowDiagram', ['metrics'])
  }
}
</script>

<style lang="scss" scoped>
.metrics-container {
  margin-top: 10px;
}

.intent-name {
  color: $gray500;
  font-size: $fontSizeNormal;
}
</style>
