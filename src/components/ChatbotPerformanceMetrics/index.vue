<template>
  <div class="vue-container">
    <b-row>
      <b-col>
        <h3>Chatbot Performance</h3>
        <div class="sub-title">Compared to last 7 days</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <TotalUsers />
      </b-col>
      <b-col sm="4">
        <ChatbotRating />
      </b-col>
      <b-col sm="4">
        <AvgSessionDuration />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <GoalCompletion />
      </b-col>
      <b-col sm="4">
        <GoalConversionRate />
      </b-col>
      <b-col sm="4">
        <DeflectionRate />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <TotalFallbackCount />
      </b-col>
      <b-col sm="4">
        <OverallConfusion />
      </b-col>
      <b-col sm="4">
        <ChatbotActivation />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TotalUsers from '@/components/ChatbotPerformanceMetrics/TotalUsers'
import ChatbotRating from '@/components/ChatbotPerformanceMetrics/ChatbotRating'
import AvgSessionDuration from '@/components/ChatbotPerformanceMetrics/AvgSessionDuration'
import GoalCompletion from '@/components/ChatbotPerformanceMetrics/GoalCompletion'
import GoalConversionRate from '@/components/ChatbotPerformanceMetrics/GoalConversionRate'
import DeflectionRate from '@/components/ChatbotPerformanceMetrics/DeflectionRate'
import TotalFallbackCount from '@/components/ChatbotPerformanceMetrics/TotalFallbackCount'
import OverallConfusion from '@/components/ChatbotPerformanceMetrics/OverallConfusion'
import ChatbotActivation from '@/components/ChatbotPerformanceMetrics/ChatbotActivation'

export default {
  components: {
    TotalUsers,
    ChatbotRating,
    AvgSessionDuration,
    GoalCompletion,
    GoalConversionRate,
    DeflectionRate,
    TotalFallbackCount,
    OverallConfusion,
    ChatbotActivation
  },
  created () {
    this.$store.dispatch('chatbotPerformance/getPerformanceData')
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    margin: 0;
    color: $black500;
  }

  .sub-title {
    font-size: $fontSizeSmall10;
    font-weight: normal;
    color: $gray500;
  }
</style>
