<template>
  <span v-on="onClick && { click: onClick }">
    <slot />
  </span>
</template>

<script>
export default {
  props: ['onClick']
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
