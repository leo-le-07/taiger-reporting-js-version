<template>
  <div id="app">
    <div class="taiger-content-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  padding: 0 40px;
}

.taiger-content-container {
  flex-grow: 1;
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
