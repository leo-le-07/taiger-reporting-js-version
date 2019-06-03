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
        <slot name="value" />
      </div>
    </div>
    <div class="footer-container">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faInfoCircle,
  faCaretUp,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'

export default {
  props: [
    'percentageValue',
    'isPositivePercentage',
    'title'
  ],
  data () {
    return {
      infoIcon: faInfoCircle,
      upIcon: faCaretUp,
      downIcon: faCaretDown
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.vue-container {
  padding: 20px 20px 5px;
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
  font-size: $fontSizeSmall14;
  font-weight: 500;
  color: $gray500;
  display: flex;
  margin-bottom: 10px;
  min-height: 42px;
}

.value {
  font-size: $fontSizeLarge36;
  color: $black500;
}

.info-icon {
  color: $green500;
  margin-left: 10px;
}

.content-container {
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.footer-container {
  display: flex;
  justify-content: flex-end;
  min-height: 24px;
  font-size: $fontSizeSmall14;
}
</style>
