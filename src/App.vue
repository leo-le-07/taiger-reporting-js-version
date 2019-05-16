<template>
  <div id="app">
    <Sidebar />
    <div class="taiger-content-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  }
}
</script>


<style lang="scss">
#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
  display: flex;
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
