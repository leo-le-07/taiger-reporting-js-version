<template>
  <div class="vue-container">
    <Modal
      title="Answer Rating"
      id="answer-rating-modal"
    >
      <template slot="content">
        <b-table
          striped
          hover
          bordered
          borderless
          table-class="app-table"
          thead-class="app-thead"
          tbody-tr-class="app-tbody-tr"
          :fields="fields"
          :items="answerRatings"
        />
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Modal from '@/components/common/Modal'

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
  components: {
    Modal
  },
  computed: {
    ...mapState({
      answerRatings: state => state.contentPerformance.answerRatingList
    })
  }
}
</script>
