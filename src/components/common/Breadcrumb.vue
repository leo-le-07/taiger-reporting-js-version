<template>
  <div class="vue-container">
    <b-breadcrumb :items="items" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      items: state => state.breadcrumb.items
    })
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumb {
    background-color: transparent;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    min-height: 30px;
    font-size: $fontSizeSmall14;
  }

  .breadcrumb-item+.breadcrumb-item::before {
    content: ">";
  }
</style>
