<template>
  <span v-on="onClick && { click: onClick }">{{ value }}</span>
</template>

<script>
export default {
  props: ['value', 'onClick']
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
