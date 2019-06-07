import repository from './repository'

const resource = '/content-conversation-history'

export default {
  get (params) {
    return repository.get(`${resource}`, { params })
  }
}
