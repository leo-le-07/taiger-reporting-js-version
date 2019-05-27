import Vue from 'vue'
import Vuex from 'vuex'

import chatbotUsersOverview from './modules/chatbot-users-overview'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    chatbotUsersOverview,
    strict: debug
  }
})
