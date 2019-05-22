<template>
  <b-container id="app">
    <div class="taiger-content-container">
      <router-view/>
    </div>
  </b-container>
</template>

<style lang="scss" scoped>
#app {
  padding-top: 40px;
  padding-bottom: 20px;
}
/* #nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $primary;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
