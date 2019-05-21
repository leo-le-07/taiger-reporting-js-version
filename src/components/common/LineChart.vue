<script>
import { Line, mixins } from 'vue-chartjs'
import { fontSizes, colors, fontFamilyDefault } from '@/constants'

const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object
    },
    options: {
      type: Object,
      default () {
        return {
          elements: {
            line: {
              tension: 0
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                fontFamily: fontFamilyDefault,
                fontColor: colors.black500,
                fontSize: fontSizes.small14
              }
            }],
            yAxes: [{
              ticks: {
                fontFamily: fontFamilyDefault,
                fontColor: colors.gray500,
                fontSize: fontSizes.small14
              }
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
