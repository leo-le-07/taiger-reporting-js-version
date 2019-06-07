<template>
  <div class="home">
    <div class="main-content-container" v-if="selectedId === null">
      <div class="app-header-page-container">
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
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ContentDetails from '@/components/ContentDetails'
import ContentPerformanceMetrics from '@/components/ContentPerformanceMetrics/index'
import AnswerRatingModal from '@/components/AnswerRatingModal'

export default {
  components: {
    ContentDetails,
    ContentPerformanceMetrics,
    AnswerRatingModal
  },
  computed: {
    ...mapState({
      selectedId: state => state.contentPerformance.selectedIntentId
    })
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
