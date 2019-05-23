import moment from 'moment'
import sortBy from 'lodash/sortBy'

import { DD_MM } from '@/utils/dateFormatter'
import { overviewData } from '@/services/chatbotUsers'

export const dataCollection = ({
  timeType
}) => {
  const data = overviewData({ timeType })
  const { newUser, returningUser, totalUser } = data
  const labels = sortBy(newUser, 'date').map((item) => moment(item.date).format(DD_MM))
  const datasets = [
    {
      label: 'New users',
      fill: false,
      pointBackgroundColor: 'rgba(236, 95, 51, 0.7)',
      pointRadius: 5,
      borderColor: '#EC5F33',
      borderWidth: 1,
      data: sortBy(newUser, 'date').map((item) => item.value)
    },
    {
      label: 'Returning users',
      fill: false,
      pointBackgroundColor: 'rgba(26, 179, 148, 0.7)',
      pointRadius: 5,
      borderColor: '#1AB394',
      borderWidth: 1,
      data: sortBy(returningUser, 'date').map((item) => item.value)
    },
    {
      label: 'Total users',
      fill: false,
      pointBackgroundColor: 'rgba(2, 117, 216, 0.7)',
      pointRadius: 5,
      borderColor: '#0275D8',
      borderWidth: 1,
      data: sortBy(totalUser, 'date').map((item) => item.value)
    }
  ]

  return {
    labels,
    datasets
  }
}
