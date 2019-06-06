import moment from 'moment'

export const DD_MM = 'DD MMM'
export const DD_MM_YYYY_HH_MM = 'DD/MM/YYYY HH:mm A'

export const displayDate = (date, formatString) => moment(date).format(formatString)

export const getDuration = (startDate, endDate) => {
  const duration = moment.duration(endDate.diff(startDate))
  return `${Math.floor(duration.asHours())}h ${duration.minutes()}m ${duration.seconds()}s`
}
