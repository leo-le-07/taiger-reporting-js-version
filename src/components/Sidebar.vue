<template>
  <div class="sidenav" :class="{ collapsed: isCollapsed }">
    <div class="collapseButton" @click="toggleCollapsed()">
      <HambergerMenuIcon v-if="isCollapsed" />
      <ArrowBackIcon v-else />
    </div>
    <div class="title" v-show="!isCollapsed">
      reports
    </div>
    <div class="item-list" :class="{ collapsed: isCollapsed }">
      <div class="item">
        <a href="#">
          <span class="icon">
            <font-awesome-icon :icon="overviewIcon" :size="iconSize" />
          </span>
          Overview
        </a>
      </div>
      <div class="item">
        <a href="#">
          <span class="icon">
            <font-awesome-icon :icon="engagementIcon" :size="iconSize" />
          </span>
          Engagement
        </a>
      </div>
      <div class="item">
        <a href="#">
          <span class="icon">
            <font-awesome-icon :icon="contentPerformanceIcon" :size="iconSize" />
          </span>
          {{ isCollapsed ? "Content" : "Content Performance" }}
        </a>
      </div>
      <div class="item">
        <a href="#">
          <span class="icon">
            <font-awesome-icon :icon="engagementIcon" :size="iconSize" />
          </span>
          {{ isCollapsed ? "Satisfaction" : "User Satisfaction" }}
        </a>
      </div>
      <div class="item">
        <a href="#">
          <span class="icon">
            <font-awesome-icon :icon="formReportsIcon" :size="iconSize" />
          </span>
          {{ isCollapsed ? "Form Report" : "Form Reports" }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faDesktop,
  faUsers,
  faChartBar,
  faThumbsUp,
  faAlignLeft
} from '@fortawesome/free-solid-svg-icons'

import ArrowBackIcon from '@/assets/arrow_back_ios_24px.svg'
import HambergerMenuIcon from '@/assets/hamberger-menu.svg'

export default {
  props: ['isCollapsed', 'toggleCollapsed'],
  data () {
    return {
      overviewIcon: faDesktop,
      engagementIcon: faUsers,
      contentPerformanceIcon: faChartBar,
      userSatisfactionIcon: faThumbsUp,
      formReportsIcon: faAlignLeft
    }
  },
  components: {
    ArrowBackIcon,
    HambergerMenuIcon
  },
  computed: {
    iconSize () {
      return this.isCollapsed ? '3x' : 'xs'
    }
  }
}
</script>

<style scoped lang="scss">
.sidenav {
  height: 100%;
  width: 280px;
  min-width: 280px;
  background-color: $white10;
  padding-top: 60px;
  padding-left: 30px;
  position: fixed;
  float: left;
  transition: .3s ease;
}

.collapsed {
  width: 80px;
  min-width: 80px;
  padding-left: 0;
  transition: .3s ease;
}

.title {
  text-transform: uppercase;
  font-size: $fontSizeSmall14;
  font-weight: 500;
  color: $gray500;
  margin-bottom: 10px;
}

.item-list {
  padding-left: 10px;

  .item {
    display: flex;
    line-height: 35px;
    color: $gray600;
    font-size: $fontSizeNormal;

    &:hover {
      color: $primary;

      svg {
        fill: $primary;
      }
    }

    a {
      text-decoration: none;
      color: $gray600;
      display: block;

      &:hover {
        color: $primary;
      }
    }

    .icon {
      margin-right: 15px;
    }
  }

  &.collapsed {
    padding-left: 0;

    .item {
      line-height: 35px;
      color: $gray600;
      font-size: $fontSizeSmall12;

      a {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-top: 10px;
        width: 100%;

        &:hover {
          background: $primary;
          color: $white;
        }
      }
    }

    .icon {
      margin-right: 0;
    }
  }
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
  top: 30px;
  transform: translateX(50%);
}
</style>
