<template>
  <div class="vue-container">
    <b-row>
      <b-col class="header-container">
        <h3>Content Details</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          bordered
          table-class="app-table"
          thead-class="app-thead"
          tbody-tr-class="app-tbody-tr"
          :fields="fields"
          :items="items"
        >
          <template slot="HEAD_confusionRate" slot-scope="data">
            <div class="confusion-rate-header-container">
              {{ data.label }}
              <span class="info-icon"><font-awesome-icon :icon="icons.information" /></span>
            </div>
          </template>
          <template slot="action">
            <div class="action-container">
              <a href="#">View Flow Diagram</a>
              <a href="#">View Conversations</a>
            </div>
          </template>
        </b-table>
        <div class="app-pagination-container">
          <div class="summary-container">
            {{ summaryPageRange }} of {{ totalRows }}
          </div>
          <b-pagination
            hide-goto-end-buttons
            next-text="Next"
            prev-text="Previous"
            :total-rows="totalRows"
            :per-page="pageSize"
            :value="currentPage"
            @change="changePagination"
          />
          <div class="rows-page-container">
            <div class="label">Rows per page</div>
            <div class="app-dropdown-container">
              <b-dropdown :text="pageSize.toString()" right>
                <b-dropdown-item
                  v-for="value in rowsPerPageOptions"
                  :active="pageSize === value"
                  :key="value"
                  @click="selectPageSize(value)"
                >
                  {{ value }}
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  data () {
    return {
      rowsPerPageOptions: [5, 10, 15],
      fields: [
        { key: 'id', label: 'ID' },
        'intent',
        { key: 'timesAsked', label: 'Times Asked' },
        { key: 'fallbackCount', label: 'Fallback Count' },
        { key: 'confusionRate', label: 'Confusion Rate' },
        { key: 'dropoffRate', label: 'Dropoff Rate' },
        { key: 'action', label: 'Action', thClass: 'content-details__action-header' }
      ],
      icons: {
        information: faInfoCircle
      }
    }
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    ...mapState({
      currentPage: state => state.contentPerformance.contentDetails.page,
      pageSize: state => state.contentPerformance.contentDetails.pageSize,
      totalRows: state => state.contentPerformance.contentDetails.totalRows
    }),
    ...mapGetters('contentPerformance', {
      items: 'contentList'
    }),
    summaryPageRange () {
      const fromNumber = (this.currentPage - 1) * this.pageSize + 1
      const toNumber = Math.min(this.totalRows, this.currentPage * this.pageSize)
      return `${fromNumber} - ${toNumber}`
    }
  },
  methods: {
    ...mapActions('contentPerformance', [
      'updateCurrentPage',
      'updatePageSize'
    ]),
    changePagination (pageNumber) {
      this.updateCurrentPage({ currentPage: pageNumber })
    },
    selectPageSize (value) {
      this.updatePageSize({ pageSize: value })
    }
  },
  created () {
    this.$store.dispatch('contentPerformance/getContentDetails')
  }
}
</script>

<style lang="scss">
.app-table {
  tbody > tr:nth-of-type(odd) {
    background: $white10;
  }
}

.app-thead {
  font-size: $fontSizeSmall14;
  color: $black500;

  & > tr > th {
    border-bottom-width: 0;
  }

  .content-details__action-header {
    width: 300px;
  }
}

.app-tbody-tr {
  font-size: $fontSizeSmall14;
  color: $black500;

  .action-link {
    margin-right: 10px;
  }

  &:hover {
    background: $white10 !important;
  }
}

.app-pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  .pagination {
    margin-bottom: 0;
  }

  .page-item.active {
    .page-link {
      background: $primary;
    }
  }

  .page-item.disabled {
    .page-link {
      color: $gray600;
    }
  }

  .page-link {
    font-size: $fontSizeSmall14;
    border-style: none;
    color: $primary;

    &:focus {
      box-shadow: none;
    }
  }
}

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
  margin-bottom: 10px;
}

h3 {
  color: $black500;
}

.summary-container, .rows-page-container {
  color: $gray300;
  font-size: $fontSizeSmall12;
}

.rows-page-container {
  display: flex;
  align-items: center;

  .label {
    margin-right: 10px;
  }
}

.action-container {
  a {
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
