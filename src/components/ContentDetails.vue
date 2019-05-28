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
        />
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
            Rows per page
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      fields: [
        { key: 'id', label: 'ID' },
        'intent',
        { key: 'timesAsked', label: 'Times Asked' },
        { key: 'fallbackCount', label: 'Fallback Count' },
        { key: 'confusionRate', label: 'Confusion Rate' },
        { key: 'dropoffRate', label: 'Dropoff Rate' },
      ],
    }
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
    ...mapActions('contentPerformance', ['updateCurrentPage']),
    changePagination (pageNumber) {
      this.updateCurrentPage({ currentPage: pageNumber })
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
</style>
