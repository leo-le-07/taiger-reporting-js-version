<template>
  <b-modal
    title="Answer Rating"
    dialog-class="app-modal-dialog"
    header-class="app-modal-header"
    body-class="app-modal-body"
    no-close-on-backdrop
    no-close-on-esc
    scrollable
    size="lg"
    v-model="isAnswerRatingOpen"
  >
    <template slot="default">
      <b-table
        striped
        hover
        table-class="app-table"
        thead-class="app-thead"
        tbody-tr-class="app-tbody-tr"
        :fields="fields"
        :items="answerRatings"
      />
    </template>
    <template slot="modal-footer" slot-scope="{ close }">
      <b-button
        class="app-modal-footer-button"
        variant="outline-secondary"
      >
        Export
      </b-button>
      <b-button
        class="app-modal-footer-button"
        variant="outline-secondary"
        @click="close()"
      >Close</b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { formatNumber } from '@/utils/number-formatter'

export default {
  data () {
    return {
      fields: [
        {
          key: 'id',
          label: 'ID'
        },
        'question',
        {
          key: 'positiveRating',
          label: 'Positive Ratings',
          class: 'text-center',
          sortable: true,
          formatter: (value) => formatNumber(value)
        },
        {
          key: 'negativeRating',
          label: 'Negative Ratings',
          class: 'text-center',
          sortable: true,
          formatter: (value) => formatNumber(value)
        },
        {
          key: 'noRating',
          label: 'No Ratings',
          class: 'text-center',
          sortable: true,
          formatter: (value) => formatNumber(value)
        }
      ]
    }
  },
  computed: {
    ...mapState({
      answerRatings: state => state.contentPerformance.answerRating.resultList
    }),
    isAnswerRatingOpen: {
      get () {
        return this.$store.state.contentPerformance.answerRating.isDialogOpen
      },
      set (value) {
        this.$store.commit('contentPerformance/setAnsweringRatingOpen', { value })
      }
    }
  }
}
</script>

<style lang="scss">
</style>
