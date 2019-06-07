<template>
  <div class="vue-container">
    <b-row>
      <b-col class="header-container">
        <h3>Content Details</h3>
        <!-- <div class="search-container">
          <Search :onChange="updateSearch" />
        </div> -->
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Table
          :isLoading="isLoading"
          :fields="fields"
          :items="items"
          :sortingChanged="sortingChanged"
        >
          <template slot="HEAD_confusionRate" slot-scope="data">
            <div class="confusion-rate-header-container">
              {{ data.label }}
              <span class="info-icon"><font-awesome-icon :icon="icons.information" /></span>
            </div>
          </template>
          <template slot="action" slot-scope="data">
            <div class="action-container">
              <router-link
                tag="a"
                :to="{
                  name: routeConstants.contentFlowDiagram.name,
                  params: { id: data.item.id }
                }"
                append
                class="action-item"
              >
                View Flow Diagram
              </router-link>
              <router-link
                tag="a"
                :to="{
                  name: routeConstants.contentConversations.name,
                  params: { id: data.item.id }
                }"
                append
                class="action-item"
              >
                View Conversations
              </router-link>
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
import { mapGetters, mapState, mapActions } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import PaginationGroup from '@/components/common/PaginationGroup'
// import Search from '@/components/common/Search'
import Table from '@/components/common/Table'

import { routeConstants } from '@/constants'

export default {
  data () {
    return {
      fields: [
        {
          key: 'id',
          label: 'ID'
        },
        'intent',
        {
          key: 'timesAsked',
          label: 'Times Asked',
          sortable: true
        },
        {
          key: 'fallbackCount',
          label: 'Fallback Count',
          sortable: true
        },
        {
          key: 'confusionRate',
          label: 'Confusion Rate',
          sortable: true
        },
        {
          key: 'dropoffRate',
          label: 'Dropoff Rate',
          sortable: true
        },
        {
          key: 'action',
          label: 'Action',
          thClass: 'header__width-300px'
        }
      ],
      icons: {
        information: faInfoCircle
      },
      sortBy: null,
      sortDesc: true,
      routeConstants
    }
  },
  components: {
    FontAwesomeIcon,
    PaginationGroup,
    // Search,
    Table
  },
  computed: {
    ...mapState({
      currentPage: state => state.contentPerformance.contentDetails.page,
      isLoading: state => state.contentPerformance.contentDetails.isLoading,
      pageSize: state => state.contentPerformance.contentDetails.pageSize,
      totalRows: state => state.contentPerformance.contentDetails.totalRows
    }),
    ...mapGetters('contentPerformance', {
      items: 'contentList'
    })
  },
  methods: {
    ...mapActions('contentPerformance', [
      'updateCurrentPage',
      'updatePageSize',
      'updateSearchContent',
      'updateSorting'
    ]),
    changePage (pageNumber) {
      this.updateCurrentPage({ currentPage: pageNumber })
    },
    selectPageSize (value) {
      this.updatePageSize({ pageSize: value })
    },
    updateSearch (content) {
      this.updateSearchContent({ content })
    },
    sortingChanged (context) {
      this.updateSorting({
        sortBy: context.sortBy,
        sortDesc: context.sortDesc
      })
    }
  },
  created () {
    this.$store.dispatch('contentPerformance/getContentDetails')
  }
}
</script>

<style lang="scss">
.app-dropdown-container {
  .btn.dropdown-toggle.btn-secondary {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $fontSizeSmall14;
    width: 40px;
    height: 25px;
    padding: 0;
    border-color: $gray200;
    background-color: $white;
    color: $black500;
    border-radius: 4px;

    &:focus {
      box-shadow: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

h3 {
  color: $black500;
}

.pagination-container {
  margin-top: 40px;
}

.action-container {
  .action-item {
    margin-right: 10px;
  }
}

.confusion-rate-header-container {
  .info-icon {
    color: $green500;
    position: absolute;
    top: 3px;
  }
}
</style>
