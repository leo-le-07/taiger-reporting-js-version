<template>
  <div class="home">
    <div class="header">
      <h1>Overview</h1>
    </div>
    <div class="chart-container">
      <div class="sub-header">
        <div class="chart-name">Chatbot Users</div>
        <!-- <div class="filter-times">
          <FilterButtonGroup />
        </div> -->
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
  </div>
</template>

<script>
import LineChart from '@/components/common/LineChart.vue'

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
      this.dataCollection = {
        labels: ['08 Apr', '09 Apr', '10 Apr', '11 Apr', '12 Apr', '13 Apr', '14 Apr'],
        datasets: [
          {
            label: 'New users',
            fill: false,
            data: [12, 19, 3, 5, 2, 3, 22],
            pointBackgroundColor: 'rgba(236, 95, 51, 0.7)',
            pointRadius: 5,
            borderColor: '#EC5F33',
            borderWidth: 1
          },
          {
            label: 'Returning users',
            fill: false,
            data: [3, 2, 15, 12, 1, 7, 15],
            pointBackgroundColor: 'rgba(26, 179, 148, 0.7)',
            pointRadius: 5,
            borderColor: '#1AB394',
            borderWidth: 1
          }
        ]
      }
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
.chart-container {
  height: 415px;
  max-height: 415px;
  border: 1px solid $borderGray;
  border-radius: 4px;
}

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

.chart-container {
  padding: 20px;
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
