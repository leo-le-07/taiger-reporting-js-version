import { repositoryFactory } from '@/apis/repository-factory'
import { formatNumber, formatPercentage } from '@/utils/number-formatter'

const contentDetailsRepository = repositoryFactory.get('contentDetails')

const formatContentData = (contentList) => {
  return contentList.map((item) => ({
    ...item,
    timesAsked: formatNumber(item.timesAsked),
    fallbackCount: formatNumber(item.fallbackCount),
    confusionRate: formatPercentage(item.confusionRate),
    dropoffRate: formatPercentage(item.dropoffRate)
  }))
}

const DEFAULT_PAGE_SIZE = 5

const state = {
  contentDetails: {
    pageSize: DEFAULT_PAGE_SIZE,
    page: 1,
    contentList: []
  }
}

const getters = {
  contentList: (state) => {
    return formatContentData(state.contentDetails.contentList)
  }
}

const mutations = {
  setContentDetails (state, { contentList }) {
    state.contentDetails.contentList = contentList
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
