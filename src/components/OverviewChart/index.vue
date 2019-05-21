<template>
  <div class="container">
    <div class="sub-header">
      <div class="chart-name">Chatbot Users</div>
    </div>
    <div class="chart-viewport">
      <LineChart
        :chart-data="dataCollection"
        :styles="customStyles"
      />
      <div class="chart-legends">
        <ul class="legend">
          <li><span class="total" />Total</li>
          <li><span class="new" />New</li>
          <li><span class="returning" />Returning</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/common/LineChart.vue'
import { dataCollection } from './utils'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      dataCollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.dataCollection = dataCollection()
    }
  },
  computed: {
    customStyles () {
      return {
        height: '232px',
        position: 'relative'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-viewport {
  height: 232px;
  max-height: 232px;
}

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
    display: flex;
    align-items: center;
    color: $black500;
    float: left;
    margin-right: 15px;
  }

  span {
    width: 15px;
    height: 5px;
    float: left;
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
