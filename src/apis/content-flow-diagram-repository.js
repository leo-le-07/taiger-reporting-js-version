import repository from './repository'

const resource = '/content-flow-diagram'

export default {
  get (params) {
    return repository.get(`${resource}`, { params })
  }
}
