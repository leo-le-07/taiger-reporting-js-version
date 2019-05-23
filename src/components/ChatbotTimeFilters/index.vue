<template>
  <div class="vue-container">
    <b-button-group class="custom-button-group">
      <b-button
        class="custom-btn"
        :class="{ active: timeType === timeTypes.DAY }"
        @click="updateTimeType(timeTypes.DAY)"
      >
        Day
      </b-button>
      <b-button
        class="custom-btn"
        :class="{ active: timeType === timeTypes.WEEK }"
        @click="updateTimeType(timeTypes.WEEK)"
      >
        Week
      </b-button>
      <b-button
        class="custom-btn"
        :class="{ active: timeType === timeTypes.MONTH }"
        @click="updateTimeType(timeTypes.MONTH)"
      >
        Month
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
import { TIME_TYPES } from '@/components/ChatbotTimeFilters/utils.js'

export default {
  props: ['timeType', 'updateTimeType'],
  data () {
    return {
      timeTypes: TIME_TYPES
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
