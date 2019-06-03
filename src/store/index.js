import Vue from 'vue'
import Vuex from 'vuex'

import breadcrumb from './modules/breadcrumb'
import chatbotUsersOverview from './modules/chatbot-users-overview'
import chatbotPerformance from './modules/chatbot-performance'
import contentPerformance from './modules/content-performance'
import contentFlowDiagram from './modules/content-flow-diagram'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    strict: debug,
    breadcrumb,
    chatbotUsersOverview,
    chatbotPerformance,
    contentPerformance,
    contentFlowDiagram
  }
})
