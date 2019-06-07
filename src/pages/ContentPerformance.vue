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
        <ContentDetailsTable />
      </div>
      <AnswerRatingModal />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ContentDetailsTable from '@/components/ContentDetailsTable'
import ContentPerformanceMetrics from '@/components/ContentPerformanceMetrics/index'
import AnswerRatingModal from '@/components/AnswerRatingModal'

export default {
  components: {
    ContentDetailsTable,
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
