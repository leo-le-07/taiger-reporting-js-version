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
          tooltips: {
            enabled: false,
            mode: 'point',
            position: 'nearest',
            displayColors: true,
            callbacks: {
              label (tooltipItem, data) {
                const { datasetIndex, value } = tooltipItem
                const legendLabel = data.datasets[datasetIndex].label
                return legendLabel
              },
              afterLabel (tooltipItem) {
                return tooltipItem.value
              },
            },
            custom (tooltip) {
              // Ref: https://github.com/chartjs/Chart.js/blob/master/samples/tooltips/custom-line.html
              // Tooltip Element
              let tooltipEl = document.getElementById('chartjs-tooltip')
              if (!tooltipEl) {
                tooltipEl = document.createElement('div')
                tooltipEl.id = 'chartjs-tooltip'
                tooltipEl.innerHTML = '<table></table>'
                this._chart.canvas.parentNode.appendChild(tooltipEl)
              }
              // Hide if no tooltip
              if (tooltip.opacity === 0) {
                tooltipEl.style.opacity = 0
                return
              }
              // Set caret Position
              tooltipEl.classList.add('custom-chartjs-tooltip')
              tooltipEl.classList.remove('above', 'below', 'no-transform')
              if (tooltip.yAlign) {
                tooltipEl.classList.add(tooltip.yAlign)
              } else {
                tooltipEl.classList.add('no-transform')
              }

              // Set Text
              if (tooltip.body) {
                const titleLines = tooltip.title || []
                const bodyList = tooltip.body
                let innerHtml = '<thead>'
                titleLines.forEach((title) => {
                  innerHtml += `<tr><th>${title}</th></tr>`
                })
                innerHtml += '</thead><tbody>'
                bodyList.forEach((body, i) => {
                  const legendLabel = body.lines
                  const colors = tooltip.labelColors[i]
                  const style = `
                    color: ${colors.borderColor};
                    margin-left: 15px;
                  `
                  const value = `<span style="${style}">${body.after}</span>`
                  innerHtml += `<tr><td>${legendLabel} ${value}</td></tr>`
                  innerHtml
                })
                innerHtml += '</tbody>'
                let tableRoot = tooltipEl.querySelector('table')
                tableRoot.innerHTML = innerHtml
              }
              const positionY = this._chart.canvas.offsetTop
              const positionX = this._chart.canvas.offsetLeft
              // Display, position, and set styles for font
              tooltipEl.style.opacity = 1
              tooltipEl.style.left = positionX + tooltip.caretX + 'px'
              tooltipEl.style.top = positionY + tooltip.caretY + 'px'
              tooltipEl.style.fontFamily = tooltip._bodyFontFamily
              tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px'
              tooltipEl.style.fontStyle = tooltip._bodyFontStyle
              tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px'
            }
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

<style lang="scss">
.custom-chartjs-tooltip {
  opacity: 1;
  position: absolute;
  background: $white;
  color: $gray600;
  border-radius: 3px;
  transition: all .1s ease;
  pointer-events: none;
  transform: translate(-50%, calc(-100% - 10px));
  box-shadow: $boxShadowBlack;

  table {
    th {
      text-align: left;
      font-size: 6px;
      line-height: 24px;
      font-weight: 500;
      font-style: normal;
    }

    td {
      text-align: left;
      font-size: 9px;
      line-height: 24px;
      font-weight: normal;
      font-style: normal;
    }
  }
}
</style>
