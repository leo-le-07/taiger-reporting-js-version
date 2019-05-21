import randomDateStr from '@/fakers/date'
import { randomIntegerNumberBetween } from '@/fakers/number'

const overviewDataFaker = () => {
  const number = 7
  const returningUser = []
  const totalUser = []
  const newUser = Array(number).fill().map((value, index) => {
    const date = randomDateStr()
    const newUserValue = randomIntegerNumberBetween(1, 50)
    const returningUserValue = randomIntegerNumberBetween(1, 50)

    returningUser.push({
      date,
      value: returningUserValue
    })
    totalUser.push({
      date,
      value: newUserValue + returningUserValue
    })

    return {
      date,
      value: newUserValue
    }
  })

  return {
    newUser,
    returningUser,
    totalUser
  }
}

export const overviewData = () => {
  return overviewDataFaker()
}
