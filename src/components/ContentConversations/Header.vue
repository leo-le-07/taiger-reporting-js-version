<template>
  <div class="vue-container">
    <div class="intent-name-container">
      <div class="intent-name">Intent Name: {{ name }}</div>
      <div class="edit-intent">
        <ButtonOutline>Edit Intent</ButtonOutline>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ButtonOutline from '@/components/common/ButtonOutline'

export default {
  components: {
    ButtonOutline
  },
  computed: {
    ...mapState({
      name: state => state.contentConversations.name
    })
  }
}
</script>

<style lang="scss" scoped>
.intent-name-container {
  display: flex;
  align-items: center;
}

.intent-name {
  color: $gray500;
  font-size: $fontSizeNormal;
  margin-right: 15px;
}
</style>
