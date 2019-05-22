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
      <div
        class="percentage-container"
        :class="{ 'up-percentage': isPositivePercentage, 'down-percentage': !isPositivePercentage }"
      >
        <span class="indicator-icon">
          <font-awesome-icon :icon="isPositivePercentage ? upIcon : downIcon" />
        </span>
        {{ percentageValue }}%
      </div>
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
      downIcon: faCaretDown,
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.vue-container {
  padding: 20px;
  border: 1px solid $borderGray;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    box-shadow: $hoverBoxShadow;
  }
}

.header-container {
  font-size: $fontSizeNormal;
  font-weight: 500;
  color: $gray500;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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

.percentage-container {
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-size: $fontSizeLarge18;
  font-weight: bold;
}

.indicator-icon {
  margin-right: 5px;
}

.up-percentage {
  color: $green500;
}

.down-percentage {
  color: $red500;
}
</style>
