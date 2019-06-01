<template>
  <div class="home">
    <div class="header">
      <h1>Content Performance</h1>
    </div>
    <div class="metrics-container">
      <ContentPerformanceMetrics />
    </div>
    <div class="content-details-container">
      <ContentDetails />
    </div>
    <AnswerRatingModal />
  </div>
</template>

<script>
import ContentDetails from '@/components/ContentDetails'
import ContentPerformanceMetrics from '@/components/ContentPerformanceMetrics/index'
import AnswerRatingModal from '@/components/AnswerRatingModal'

export default {
  components: {
    ContentDetails,
    ContentPerformanceMetrics,
    AnswerRatingModal
  },
  created () {
    this.$store.dispatch('contentPerformance/getAnswerRatingList')
  }
}
</script>

<style lang="scss" scoped>
.content-details-container {
  margin-top: 20px;
}
</style>
