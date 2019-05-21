<template>
  <div class="container">
    <div class="sub-header">
      <div class="chart-name">Chatbot Users</div>
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
import options from '@/components/common/LineChart/options.js'
import { dataCollection } from './utils'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      dataCollection: null,
      options
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.dataCollection = dataCollection()
      this.options.scales.yAxes[0].ticks.stepSize = 50
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
}

.chart-legends {
  display: flex;
  justify-content: flex-end;
}

.legend {
  list-style: none;

  li {
    color: $black500;
    display: inline-block;
    margin-right: 15px;
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
