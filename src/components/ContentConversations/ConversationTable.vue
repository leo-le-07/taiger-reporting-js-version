<template>
  <div class="vue-container">
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          bordered
          borderless
          no-local-sorting
          table-class="app-table"
          thead-class="app-thead"
          tbody-tr-class="app-tbody-tr"
          :busy="isLoading"
          :fields="fields"
          :items="items"
        >
          <div slot="table-busy">
            <Loading />
          </div>
          <template slot="action" slot-scope="data">
            <div class="action-container">
              <TextAsLink :onClick="openHistoryModal(data.item.referenceId)">View</TextAsLink>
            </div>
          </template>
        </b-table>
        <div class="pagination-container">
          <PaginationGroup
            :totalRows="totalRows"
            :pageSize="pageSize"
            :currentPage="currentPage"
            :changePage="changePage"
            :selectPageSize="selectPageSize"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

import Loading from '@/components/common/Loading'
import PaginationGroup from '@/components/common/PaginationGroup'
import TextAsLink from '@/components/common/TextAsLink'

import { DD_MM_YYYY_HH_MM, displayDate, getDuration } from '@/utils/date-formatter'

export default {
  data () {
    return {
      fields: [
        {
          key: 'referenceId',
          label: 'Reference ID',
          thClass: 'header__width-120px'
        },
        {
          key: 'startDate',
          label: 'Start',
          thClass: 'header__width-120px',
          formatter: (value) => displayDate(value, DD_MM_YYYY_HH_MM)
        },
        {
          key: 'endDate',
          label: 'End',
          thClass: 'header__width-120px',
          formatter: (value) => displayDate(value, DD_MM_YYYY_HH_MM)
        },
        {
          key: 'duration',
          formatter: (value, key, item) => {
            return getDuration(moment(item.startDate), moment(item.endDate))
          }
        },
        {
          key: 'categories'
        },
        {
          key: 'deliveryChannels',
          label: 'Delivery Channels'
        },
        {
          key: 'inputTypes',
          label: 'Input Types'
        },
        {
          key: 'sastisfaction'
        },
        {
          key: 'feedback'
        },
        {
          key: 'action',
          label: 'Action',
          thClass: 'header__width-80px'
        }
      ]
    }
  },
  components: {
    PaginationGroup,
    TextAsLink,
    Loading
  },
  computed: {
    ...mapState({
      currentPage: state => state.contentConversations.conversationList.page,
      isLoading: state => state.contentConversations.conversationList.isLoading,
      pageSize: state => state.contentConversations.conversationList.pageSize,
      totalRows: state => state.contentConversations.conversationList.totalRows,
      items: state => state.contentConversations.conversationList.contentList
    })
  },
  methods: {
    changePage (value) {
      this.$store.dispatch('contentConversations/updateCurrentPage',
        { currentPage: value }
      )
    },
    selectPageSize (value) {
      this.$store.dispatch('contentConversations/updatePageSize',
        { pageSize: value }
      )
    },
    openHistoryModal (id) {
      return () => {
        this.$store.dispatch('contentConversationHistory/getConversations', id)
        this.$bvModal.show('conversation-history-modal')
      }
    }
  },
  created () {
    this.$store.dispatch('contentConversations/getContentConversationList')
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  margin-top: 40px;
}
</style>
