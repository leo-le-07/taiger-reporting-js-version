import moment from 'moment'

export default () => {
  const start = new Date(2018, 0, 1)
  const end = new Date()
  const result = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return moment(result).format()
}
