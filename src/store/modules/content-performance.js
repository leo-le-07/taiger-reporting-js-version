import { repositoryFactory } from '@/apis/repository-factory'
import { formatNumber, formatPercentage } from '@/utils/number-formatter'

const contentDetailsRepository = repositoryFactory.get('contentDetails')
const contentPerformanceRepository = repositoryFactory.get('contentPerformance')

const formatContentData = (contentList) => {
  return contentList.map((item) => ({
    ...item,
    timesAsked: formatNumber(item.timesAsked),
    fallbackCount: formatNumber(item.fallbackCount),
    confusionRate: formatPercentage(item.confusionRate),
    dropoffRate: formatPercentage(item.dropoffRate)
  }))
}

const formatMetricsData = (metrics) => {
  return {
    ...metrics,
    totalFallbackCount: {
      ...metrics.totalFallbackCount,
      value: formatNumber(metrics.totalFallbackCount.value)
    },
    overallConfusionRate: {
      ...metrics.overallConfusionRate,
      value: formatPercentage(metrics.overallConfusionRate.value)
    }
  }
}

const DEFAULT_PAGE_SIZE = 5

const state = {
  contentDetails: {
    pageSize: DEFAULT_PAGE_SIZE,
    page: 1,
    totalRows: 9, // TODO: should get from server
    contentList: []
  },
  metrics: {
    totalFallbackCount: {
      value: 0
    },
    overallConfusionRate: {
      value: 0
    }
  }
}

const getters = {
  contentList: (state) => {
    return formatContentData(state.contentDetails.contentList)
  },
  metrics: (state) => {
    return formatMetricsData(state.metrics)
  }
}

const mutations = {
  setContentDetails (state, { contentList }) {
    state.contentDetails.contentList = contentList
  },
  setCurrentPage (state, { currentPage }) {
    state.contentDetails.page = currentPage
  },
  setPageSize (state, { pageSize }) {
    state.contentDetails.pageSize = pageSize
  },
  setMetrics (state, {
    totalFallbackCount,
    overallConfusionRate
  }) {
    state.metrics.totalFallbackCount = totalFallbackCount
    state.metrics.overallConfusionRate = overallConfusionRate
  }
}

const actions = {
  async getContentDetails ({ commit, state }) {
    const response = await contentDetailsRepository.get({
      _page: state.contentDetails.page,
      _limit: state.contentDetails.pageSize
    })
    const data = response.data
    commit('setContentDetails', { contentList: data })
  },
  async updateCurrentPage ({ commit, dispatch }, { currentPage }) {
    commit('setCurrentPage', { currentPage })
    dispatch('getContentDetails')
  },
  async updatePageSize ({ commit, dispatch }, { pageSize }) {
    commit('setPageSize', { pageSize })
    dispatch('getContentDetails')
  },
  async getPerformanceData ({ commit, state }) {
    const response = await contentPerformanceRepository.get()
    const { data } = response

    commit('setMetrics', {
      totalFallbackCount: data.totalFallbackCount,
      overallConfusionRate: data.overallConfusionRate
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
