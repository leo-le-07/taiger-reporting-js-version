import repository from './repository'

const resource = '/chatbot-performance'

export default {
  get () {
    return repository.get(`${resource}`)
  }
}
