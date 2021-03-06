import Vue from 'vue'
import Vuex from 'vuex'

import breadcrumb from './modules/breadcrumb'
import chatbotUsersOverview from './modules/chatbot-users-overview'
import chatbotPerformance from './modules/chatbot-performance'
import contentPerformance from './modules/content-performance'
import contentFlowDiagram from './modules/content-flow-diagram'
import contentConversations from './modules/content-conversations'
import contentConversationHistory from './modules/content-conversation-history'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    breadcrumb,
    chatbotUsersOverview,
    chatbotPerformance,
    contentPerformance,
    contentFlowDiagram,
    contentConversations,
    contentConversationHistory
  }
})
