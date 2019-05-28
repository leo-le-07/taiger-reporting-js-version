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
          table-class="app-table-class"
          thead-class="app-thead-class"
          tbody-tr-class="app-tbody-tr-class"
          :fields="fields"
          :items="items"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
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
        items: [
          {
            id: 40,
            intent: 'Looking around',
            timesAsked: 201,
            fallbackCount: 54,
            confusionRate: 26.86,
            dropoffRate: 14.52
          },
          {
            id: 21,
            intent: 'Who are you?',
            timesAsked: 202,
            fallbackCount: 54,
            confusionRate: 26.86,
            dropoffRate: 14.52
          },
          {
            id: 89,
            intent: 'Brands',
            timesAsked: 203,
            fallbackCount: 54,
            confusionRate: 26.86,
            dropoffRate: 14.52
          },
          {
            id: 38,
            intent: 'Item A',
            timesAsked: 203,
            fallbackCount: 54,
            confusionRate: 26.86,
            dropoffRate: 14.52
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
.app-table-class {
  tbody > tr:nth-of-type(odd) {
    background: $white10;
  }
}

.app-thead-class {
  font-size: $fontSizeSmall14;
  color: $black500;

  & > tr > th {
    border-bottom-width: 0;
  }
}

.app-tbody-tr-class {
  font-size: $fontSizeSmall14;
  color: $black500;

  .action-link {
    margin-right: 10px;
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
</style>
