<template>
  <div class="container">
    <button class="btn active">Day</button>
    <button class="btn">Week</button>
    <button class="btn">Month</button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.btn {
  line-height: 28px;
  font-size: 12px;
  padding: 0 12px;
  color: black;
  background: white;
  border: 1px solid #CCCCCC;
  outline: 0;

  &:focus {
    outline: 0;
  }

  &.active {
    background: #DDDDDD;
  }

  &+.btn {
    border-left: 0px;
  }

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
</style>
