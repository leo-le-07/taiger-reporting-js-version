<template>
  <div class="vue-container">
    <b-row>
      <b-col>
        <Table :isLoading="isLoading" :fields="fields" :items="items">
          <template slot="action">
            <div class="action-container">
              <TextAsLink value="View" />
            </div>
          </template>
        </Table>
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

import Table from '@/components/common/Table'
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
    Table
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
