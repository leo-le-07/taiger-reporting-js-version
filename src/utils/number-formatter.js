import numeral from 'numeral'

export const formatPercentage = (value) => (
  numeral(value).format('0.0[0]%')
)

export const formatNumber = (value, formatted = '0,0') => (
  numeral(value).format(formatted)
)
