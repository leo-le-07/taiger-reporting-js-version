<template>
  <div class="home">
    <div class="app-header-page-container">
      <h1>Conversations</h1>
    </div>
    <div class="header-container">
      <Header />
    </div>
    <div class="conversation-table-container">
      <ConversationTable />
    </div>
    <HistoryModal />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Header from '@/components/ContentConversations/Header'
import ConversationTable from '@/components/ContentConversations/ConversationTable'
import HistoryModal from '@/components/ContentConversations/HistoryModal'

import { routeConstants } from '@/constants'

export default {
  created () {
    this.$store.commit('breadcrumb/setItems', {
      items: [
        {
          text: routeConstants.contentPerformance.title,
          to: { name: routeConstants.contentPerformance.name }
        },
        {
          text: routeConstants.contentFlowDiagram.title,
          to: { name: routeConstants.contentFlowDiagram.name }
        },
        {
          text: routeConstants.contentConversations.title,
          active: true
        }
      ]
    })
    this.$store.commit('contentPerformance/setIntentId', {
      id: this.$route.params.id
    })
    this.$store.dispatch('contentConversations/getContentConversations')
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('contentPerformance/clearIntentId')
    this.$store.commit('breadcrumb/clearItems')
    next()
  },
  components: {
    Header,
    ConversationTable,
    HistoryModal
  },
  computed: {
    ...mapState({
      conversationId: state => state.contentConversationHistory.id
    })
  }
}
</script>

<style lang="scss" scoped>
.conversation-table-container {
  margin-top: 10px;
}
</style>
