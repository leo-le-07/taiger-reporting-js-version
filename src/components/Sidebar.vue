<template>
  <div class="sidenav" :class="{ collapsed: collapse }">
    <div class="collapseButton" @click="collapse = !collapse">
      <img src="@/assets/arrow_back_ios_24px.svg" alt="collapse">
    </div>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapse: false
    }
  }
}
</script>

<style scoped lang="scss">
.sidenav {
  height: 100vh;
  width: 280px;
  min-width: 280px;
  background-color: #F9F9F9;
  padding-top: 20px;
  position: relative;
  transition: .3s ease;

  &.collapsed {
    width: 100px;
    min-width: 100px;
    transition: .3s ease;
  }
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.collapseButton {
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: #444444;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  transform: translateX(50%);
}
</style>
