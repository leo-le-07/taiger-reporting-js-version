import repository from './repository'

const resource = '/answer-ratings'

export default {
  get () {
    return repository.get(`${resource}`)
  }
}
