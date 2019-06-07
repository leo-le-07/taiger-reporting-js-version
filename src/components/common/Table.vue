<template>
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
    @sort-changed="sortingChanged"
  >
    <div slot="table-busy">
      <Loading />
    </div>
  </b-table>
</template>

<script>
import Loading from '@/components/common/Loading'

export default {
  props: {
    isLoading: Boolean,
    fields: Array,
    items: Array,
    sortingChanged: {
      type: Function,
      default () {}
    }
  },
  components: {
    Loading
  }
}
</script>
