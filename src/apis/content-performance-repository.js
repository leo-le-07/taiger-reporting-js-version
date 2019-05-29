import repository from './repository'

const resource = '/content-performance'

export default {
  get () {
    return repository.get(resource)
  }
}
