import Vue from 'vue'
import Vuex from 'vuex'

import chatbotUsersOverview from './modules/chatbot-users-overview'
import chatbotPerformance from './modules/chatbot-performance'
import contentPerformance from './modules/content-performance'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    chatbotUsersOverview,
    chatbotPerformance,
    contentPerformance,
    strict: debug
  }
})
