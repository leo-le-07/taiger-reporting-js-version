<template>
  <div class="home">
    <div class="header">
      <h1>Content Performance</h1>
    </div>
    <div class="content-details-container">
      <ContentDetails />
    </div>
  </div>
</template>

<script>
import ContentDetails from '@/components/ContentDetails.vue'

export default {
  components: {
    ContentDetails
  }
}
</script>
