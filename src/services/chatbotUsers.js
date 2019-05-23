import moment from 'moment'

import { randomIntegerNumberBetween } from '@/fakers/number'
import { TIME_TYPES } from '@/components/ChatbotTimeFilters/utils.js'

const getDate = (date, timeType) => {
  if (timeType === TIME_TYPES.DAY) return date.subtract(1, 'days')
  if (timeType === TIME_TYPES.WEEK) return date.subtract(1, 'weeks')
  if (timeType === TIME_TYPES.MONTH) return date.subtract(1, 'months')
}

const overviewDataFaker = ({ timeType }) => {
  let indexDate = moment()
  const number = 7
  const returningUser = []
  const totalUser = []
  const newUser = Array(number).fill().map((value, index) => {
    indexDate = getDate(indexDate, timeType)
    const newUserValue = randomIntegerNumberBetween(1, 50)
    const returningUserValue = randomIntegerNumberBetween(1, 50)

    returningUser.push({
      date: indexDate.format(),
      value: returningUserValue
    })
    totalUser.push({
      date: indexDate.format(),
      value: newUserValue + returningUserValue
    })

    return {
      date: indexDate.format(),
      value: newUserValue
    }
  })

  return {
    newUser,
    returningUser,
    totalUser
  }
}

export const overviewData = ({ timeType }) => {
  return overviewDataFaker({ timeType })
}
