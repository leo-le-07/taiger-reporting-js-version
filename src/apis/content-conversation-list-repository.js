import repository from './repository'

const resource = '/content-conversation-list'

export default {
  get (params) {
    return repository.get(`${resource}`, { params })
  }
}
