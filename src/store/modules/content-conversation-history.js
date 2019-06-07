import { repositoryFactory } from '@/apis/repository-factory'

const contentConversationHistoryRepository = repositoryFactory.get('contentConversationHistory')

const state = {
  conversations: []
}

const mutations = {
  setConversations (state, conversations) {
    state.conversations = conversations
  }
}

const actions = {
  async getConversations ({ commit, state }, id) {
    const response = await contentConversationHistoryRepository.get({ id })

    const { data } = response

    commit('setConversations', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
