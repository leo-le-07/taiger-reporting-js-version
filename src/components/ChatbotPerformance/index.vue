<template>
  <div class="vue-container">
    <b-row>
      <b-col>
        <h3>Chatbot Performance</h3>
        <div class="sub-title">Compared to last 7 days</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <TotalUsers />
      </b-col>
      <b-col>
        <ChatbotRating />
      </b-col>
      <b-col>
        <AvgSessionDuration />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <GoalCompletion />
      </b-col>
      <b-col>
        <GoalConversionRate />
      </b-col>
      <b-col>
        <DeflectionRate />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <TotalFallbackCount />
      </b-col>
      <b-col>
        <OverallConfusion />
      </b-col>
      <b-col>
        <ChatbotActivation />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TotalUsers from '@/components/ChatbotPerformance/TotalUsers.vue'
import ChatbotRating from '@/components/ChatbotPerformance/ChatbotRating.vue'
import AvgSessionDuration from '@/components/ChatbotPerformance/AvgSessionDuration.vue'
import GoalCompletion from '@/components/ChatbotPerformance/GoalCompletion.vue'
import GoalConversionRate from '@/components/ChatbotPerformance/GoalConversionRate.vue'
import DeflectionRate from '@/components/ChatbotPerformance/DeflectionRate.vue'
import TotalFallbackCount from '@/components/ChatbotPerformance/TotalFallbackCount.vue'
import OverallConfusion from '@/components/ChatbotPerformance/OverallConfusion.vue'
import ChatbotActivation from '@/components/ChatbotPerformance/ChatbotActivation.vue'

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
