import repository from './repository'

const resource = '/chatbot-users-overview'

export default {
  get (params) {
    return repository.get(`${resource}`, { params })
  }
}
