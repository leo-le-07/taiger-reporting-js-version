<template>
  <div class="vue-container">
    <div class="navbar-container">
      <NavBar />
    </div>
    <b-container class="taiger-content-container">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/index.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.taiger-content-container {
  padding-top: 40px;
  padding-bottom: 30px;
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
