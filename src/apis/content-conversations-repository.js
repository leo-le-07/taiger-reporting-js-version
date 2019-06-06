import repository from './repository'

const resource = '/content-conversations'

export default {
  get (params) {
    return repository.get(`${resource}`, { params })
  }
}
