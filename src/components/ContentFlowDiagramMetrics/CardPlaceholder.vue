<template>
  <div class="vue-container">
    <div class="header-container">
      {{ title }}
      <span class="info-icon">
        <font-awesome-icon :icon="infoIcon" />
      </span>
    </div>
    <div class="content-container">
      <div class="value">
        {{value}}
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  props: [
    'title',
    'value'
  ],
  data () {
    return {
      infoIcon: faInfoCircle
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.vue-container {
  padding: 10px 15px 5px;
  border: 1px solid $borderGray500;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    box-shadow: $hoverBoxShadow;
  }
}

.header-container {
  font-size: $fontSizeSmall12;
  font-weight: 500;
  color: $gray500;
  display: flex;
  margin-bottom: 10px;
  min-height: 36px;
}

.value {
  font-size: $fontSizeLarge24;
  color: $black500;
}

.info-icon {
  color: $green500;
  margin-left: 10px;
}

.content-container {
  display: flex;
  align-items: center;
}
</style>
