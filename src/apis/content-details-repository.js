import repository from './repository'

const resource = '/content-details'

export default {
  get (params) {
    return repository.get(`${resource}`, { params })
  }
}
