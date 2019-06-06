<template>
  <div class="vue-container">
    <b-button variant="outline-secondary">{{ content }}</b-button>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="scss" scoped>
.btn-outline-secondary {
  border-color: $gray200;
  font-size: $fontSizeSmall14;
  color: $black500;

  &:hover {
    background-color: $gray200;
  }
}
</style>
