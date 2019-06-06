import { repositoryFactory } from '@/apis/repository-factory'
import { DEFAULT_PAGE_SIZE } from '@/constants'
import { getQueryParams } from '@/utils/request-helpers'

const contentConversationsRepository = repositoryFactory.get('contentConversations')
const contentConversationListRepository = repositoryFactory.get('contentConversationList')

const state = {
  name: '',
  conversationList: {
    isLoading: false,
    pageSize: DEFAULT_PAGE_SIZE,
    page: 1,
    totalRows: 4, // TODO: should get from server
    contentList: []
  }
}

const mutations = {
  setIntentName (state, { name }) {
    state.name = name
  },
  setConversationLoading (state, { value }) {
    state.conversationList.isLoading = value
  },
  setConversationList (state, { contentList }) {
    state.conversationList.contentList = contentList
  },
  setCurrentPage (state, { currentPage }) {
    state.conversationList.page = currentPage
  },
  setPageSize (state, { pageSize }) {
    state.conversationList.pageSize = pageSize
  }
}

const actions = {
  updateCurrentPage ({ commit, dispatch }, { currentPage }) {
    commit('setCurrentPage', { currentPage })
    dispatch('getContentConversationList')
  },
  updatePageSize ({ commit, dispatch }, { pageSize }) {
    commit('setPageSize', { pageSize })
    dispatch('getContentConversationList')
  },
  async getContentConversations ({ commit, rootState }) {
    const response = await contentConversationsRepository.get({
      id: rootState.contentPerformance.id
    })
    const { data } = response
    commit('setIntentName', { name: data.name })
  },
  async getContentConversationList ({ commit, state }) {
    commit('setConversationLoading', { value: true })

    const params = getQueryParams({
      page: state.conversationList.page,
      pageSize: state.conversationList.pageSize
    })
    const response = await contentConversationListRepository.get(params)
    const data = response.data

    commit('setConversationList', { contentList: data })
    commit('setConversationLoading', { value: false })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
