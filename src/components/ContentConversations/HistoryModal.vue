<template>
  <div class="vue-container">
    <Modal title="Conversation History" id="conversation-history-modal" :isScrollable="false">
      <template slot="content">
        <div class="chat-history-container">
          <div class="user-system-header">
            <div class="system-header">System</div>
            <div class="user-header">User</div>
          </div>
          <div class="content-container">
            <Message :isSystem="true" :items="['Okey which service do you want Okey which service do you want Okey which service do you want Okey which service do you want Okey which service do you want Okey which service do you want Okey which service do you want Okey which service do you want ', 'hello 1', 'hello 1', 'hello 1']" />
            <Message :isSystem="false" :items="['hello 2']" />
            <Message :isSystem="true" :items="['hello 1', 'hello 1', 'hello 1', 'hello 1']" />
            <Message :isSystem="false" :items="['hello 2']" />
            <Message :isSystem="true" :items="['hello 1', 'hello 1', 'hello 1', 'hello 1']" />
            <Message :isSystem="false" :items="['hello 2']" />
            <Message :isSystem="true" :items="['hello 1', 'hello 1', 'hello 1', 'hello 1']" />
            <Message :isSystem="false" :items="['hello 2']" />
            <Message :isSystem="true" :items="['hello 1', 'hello 1', 'hello 1', 'hello 1']" />
            <Message :isSystem="false" :items="['hello 2']" />
            <Message :isSystem="true" :items="['hello 1', 'hello 1', 'hello 1', 'hello 1']" />
            <Message :isSystem="false" :items="['hello 2']" />
            <Message :isSystem="true" :items="['hello 1', 'hello 1', 'hello 1', 'hello 1']" />
            <Message :isSystem="false" :items="['hello 2']" />
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal'
import Message from './Message'

export default {
  components: {
    Modal,
    Message
  }
}
</script>

<style lang="scss" scoped>
.chat-history-container {
  .user-system-header {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    color: $gray500;
    font-size: $fontSizeSmall12;
    margin-bottom: 10px;
  }

  .content-container {
    height: 350px;
    overflow-y: auto;
  }

  .user-header {
    margin-right: 25px;
  }
}
</style>
