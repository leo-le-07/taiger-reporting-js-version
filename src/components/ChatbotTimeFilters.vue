<template>
  <div class="vue-container">
    <b-button-group class="custom-button-group">
      <b-button
        class="custom-btn"
        :class="{ active: timeType === timeTypeFilters.DAY }"
        @click="updateTimeType(timeTypeFilters.DAY)"
      >
        Day
      </b-button>
      <b-button
        class="custom-btn"
        :class="{ active: timeType === timeTypeFilters.WEEK }"
        @click="updateTimeType(timeTypeFilters.WEEK)"
      >
        Week
      </b-button>
      <b-button
        class="custom-btn"
        :class="{ active: timeType === timeTypeFilters.MONTH }"
        @click="updateTimeType(timeTypeFilters.MONTH)"
      >
        Month
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { timeTypeFilters } from '@/constants'

export default {
  data () {
    return {
      timeTypeFilters
    }
  },
  computed: mapState({
    timeType: state => state.chatbotUsersOverview.timeType
  }),
  methods: {
    ...mapMutations('chatbotUsersOverview', ['setTimeType']),
    ...mapActions('chatbotUsersOverview', ['getChartData']),
    updateTimeType (timeType) {
      this.setTimeType({ timeType })
      this.getChartData()
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-button-group {
  .custom-btn {
    font-size: $fontSizeSmall12;
    border: 1px solid $gray200;
    background-color: $white;
    color: $black500;

    &:focus {
      outline: 0;
      box-shadow: none;
    }

    &.active {
      background-color: $gray100;
      border: 1px solid $gray200;
      color: $black500;

      &:focus {
        outline: 0;
        box-shadow: none;
      }
    }
  }
}
</style>
