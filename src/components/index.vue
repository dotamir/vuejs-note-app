<template>
  <div class="container is-fluid is-marginless">
    <div class="columns">
      <div class="column is-one-quarter">
        <v-sidebar></v-sidebar>
      </div>
      <div class="column rightBar">
        <v-content></v-content>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from './sideBar.vue'
import content from './content.vue'
export default {
  name: 'index',
  components: {
    'v-sidebar': sideBar,
    'v-content': content
  }
}
</script>

<style scoped>
.rightBar {
  padding: 2rem;
}
</style>
