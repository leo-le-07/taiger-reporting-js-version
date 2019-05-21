<template>
  <div id="app">
    <div class="taiger-content-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  padding: 0 40px;
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
