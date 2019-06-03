import { repositoryFactory } from '@/apis/repository-factory'

import { formatNumber, formatPercentage } from '@/utils/number-formatter'

const contentFlowDiagramRepository = repositoryFactory.get('contentFlowDiagram')

const formatMetrics = (metrics) => ({
  ...metrics,
  timesAsked: formatNumber(metrics.timesAsked),
  flowCompletionRate: formatPercentage(metrics.flowCompletionRate),
  fallbackCount: formatNumber(metrics.fallbackCount),
  confusionRate: formatPercentage(metrics.confusionRate),
  dropoffRate: formatPercentage(metrics.dropoffRate),
  positiveRating: formatNumber(metrics.positiveRating)
})

const state = {
  id: null,
  name: '',
  metrics: {
    timesAsked: 0,
    flowCompletionRate: 0,
    fallbackCount: 0,
    confusionRate: 0,
    dropoffRate: 0,
    positiveRating: 0
  }
}

const getters = {
  metrics: state => formatMetrics(state.metrics)
}

const mutations = {
  setIntentId (state, { id }) {
    state.id = id
  },
  clearIntentId (state) {
    state.id = null
  },
  setMetricsData (state, {
    timesAsked,
    flowCompletionRate,
    fallbackCount,
    confusionRate,
    dropoffRate,
    positiveRating
  }) {
    state.metrics.timesAsked = timesAsked
    state.metrics.flowCompletionRate = flowCompletionRate
    state.metrics.fallbackCount = fallbackCount
    state.metrics.confusionRate = confusionRate
    state.metrics.dropoffRate = dropoffRate
    state.metrics.positiveRating = positiveRating
  },
  setIntentName (state, { name }) {
    state.name = name
  }
}

const actions = {
  async getFlowDiagramData ({ commit, state }, { id }) {
    commit('setIntentId', { id })

    const response = await contentFlowDiagramRepository.get({
      id: state.id
    })
    const { data } = response

    commit('setMetricsData', {
      timesAsked: data.metrics.timesAsked,
      flowCompletionRate: data.metrics.flowCompletionRate,
      fallbackCount: data.metrics.fallbackCount,
      confusionRate: data.metrics.confusionRate,
      dropoffRate: data.metrics.dropoffRate,
      positiveRating: data.metrics.positiveRating
    })
    commit('setIntentName', { name: data.name })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
