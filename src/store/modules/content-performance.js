import { repositoryFactory } from '@/apis/repository-factory'
import { formatNumber, formatPercentage } from '@/utils/number-formatter'

const contentDetailsRepository = repositoryFactory.get('contentDetails')
const contentPerformanceRepository = repositoryFactory.get('contentPerformance')
const answerRatingRepository = repositoryFactory.get('answerRating')

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
    totalFallbackCount: formatNumber(metrics.totalFallbackCount),
    overallConfusionRate: formatPercentage(metrics.overallConfusionRate),
    noMessageSentByUser: formatNumber(metrics.noMessageSentByUser),
    totalNoAnswerRatedHelpful: formatNumber(metrics.totalNoAnswerRatedHelpful)
  }
}

const DEFAULT_PAGE_SIZE = 5

const state = {
  contentDetails: {
    pageSize: DEFAULT_PAGE_SIZE,
    page: 1,
    totalRows: 9, // TODO: should get from server
    contentList: [],
    searchContent: '',
    sortBy: null,
    sortDesc: true
  },
  metrics: {
    totalFallbackCount: 0,
    overallConfusionRate: 0,
    noMessageSentByUser: 0,
    totalNoAnswerRatedHelpful: 0
  },
  answerRatingList: []
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
    overallConfusionRate,
    noMessageSentByUser,
    totalNoAnswerRatedHelpful
  }) {
    state.metrics.totalFallbackCount = totalFallbackCount
    state.metrics.overallConfusionRate = overallConfusionRate
    state.metrics.noMessageSentByUser = noMessageSentByUser
    state.metrics.totalNoAnswerRatedHelpful = totalNoAnswerRatedHelpful
  },
  setSearchContent (state, { content }) {
    state.contentDetails.searchContent = content
  },
  setSortBy (state, { sortBy }) {
    state.contentDetails.sortBy = sortBy
  },
  setSortDesc (state, { sortDesc }) {
    state.contentDetails.sortDesc = sortDesc
  },
  setListAnswerRating (state, { resultList }) {
    state.answerRatingList = resultList
  }
}

const actions = {
  async getContentDetails ({ commit, state }) {
    const response = await contentDetailsRepository.get({
      _page: state.contentDetails.page,
      _limit: state.contentDetails.pageSize,
      q: encodeURIComponent(state.contentDetails.searchContent),
      _sort: state.contentDetails.sortBy,
      _order: state.contentDetails.sortDesc ? 'desc' : 'asc'
    })
    const data = response.data
    commit('setContentDetails', { contentList: data })
  },
  updateCurrentPage ({ commit, dispatch }, { currentPage }) {
    commit('setCurrentPage', { currentPage })
    dispatch('getContentDetails')
  },
  updatePageSize ({ commit, dispatch }, { pageSize }) {
    commit('setPageSize', { pageSize })
    dispatch('getContentDetails')
  },
  async getPerformanceData ({ commit, state }) {
    const response = await contentPerformanceRepository.get()
    const { data } = response

    commit('setMetrics', {
      totalFallbackCount: data.totalFallbackCount,
      overallConfusionRate: data.overallConfusionRate,
      noMessageSentByUser: data.noMessageSentByUser,
      totalNoAnswerRatedHelpful: data.totalNoAnswerRatedHelpful
    })
  },
  updateSearchContent ({ commit, dispatch }, { content }) {
    commit('setSearchContent', { content })
    dispatch('getContentDetails')
  },
  updateSorting ({ commit, dispatch }, { sortBy, sortDesc }) {
    commit('setSortBy', { sortBy })
    commit('setSortDesc', { sortDesc })
    dispatch('getContentDetails')
  },
  async getAnswerRatingList ({ commit }) {
    const response = await answerRatingRepository.get()
    const { data } = response

    commit('setListAnswerRating', { resultList: data })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
