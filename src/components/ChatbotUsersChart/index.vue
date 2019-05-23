<template>
  <div class="container">
    <div class="sub-header">
      <div class="chart-name">Chatbot Users</div>
      <div class="time-filters-container">
        <ChatbotTimeFilters
          :updateTimeType="handleUpdateTimeType"
          :timeType="timeType"
        />
      </div>
    </div>
    <div class="chart-viewport">
      <LineChart
        :chart-data="dataCollection"
      />
      <div class="chart-legends">
        <ul class="legend">
          <li>
            <span class="color total" />
            <span class="text">Total</span>
          </li>
          <li>
            <span class="color new" />
            <span class="text">New</span>
          </li>
          <li>
            <span class="color returning" />
            <span class="text">Returning</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/common/LineChart/index.vue'
import ChatbotTimeFilters from '@/components/ChatbotTimeFilters/index.vue'

import options from '@/components/common/LineChart/options.js'
import { TIME_TYPES } from '@/components/ChatbotTimeFilters/utils.js'
import { dataCollection } from './utils'

export default {
  components: {
    LineChart,
    ChatbotTimeFilters
  },
  data () {
    return {
      dataCollection: null,
      options,
      timeType: TIME_TYPES.DAY
    }
  },
  mounted () {
    this.options.scales.yAxes[0].ticks.stepSize = 50
    this.fillData()
  },
  methods: {
    fillData () {
      this.dataCollection = dataCollection({
        timeType: this.timeType
      })
    },
    handleUpdateTimeType (newTimeType) {
      this.timeType = newTimeType
    }
  },
  watch: {
    timeType (value) {
      this.fillData()
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-name {
  font-weight: 500;
  font-size: $fontSizeNormal;
  line-height: 19px;
  color: $gray500;
}

.sub-header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-legends {
  display: flex;
  justify-content: flex-end;
}

.legend {
  list-style: none;
  margin-top: 1rem;

  li {
    color: $black500;
    display: inline-block;
    margin-right: 18px;
  }

  .color, .text {
    display: inline-block;
    vertical-align: middle;
  }

  .color {
    width: 15px;
    height: 5px;
    margin-right: 8px;
  }

  .total {
    background: $primary;
  }

  .new {
    background: $orange500;
  }

  .returning {
    background: $green500;
  }
}
</style>
