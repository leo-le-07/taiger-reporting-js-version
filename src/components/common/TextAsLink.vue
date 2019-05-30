<template>
  <span>{{ value }}</span>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="scss" scoped>
span {
  color: $primary;

  &:hover {
    cursor: pointer;
  }
}
</style>
