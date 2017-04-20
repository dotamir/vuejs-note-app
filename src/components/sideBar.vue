<template>
  <div class="columns sideBar">
    <nav class="panel">
      <p class="panel-heading">
        Notes
      </p>
      <div class="panel-block">
        <p class="control has-icon">
          <input class="input is-small" type="text" placeholder="Search">
          <a class="button newNote" v-on:click="newNote()"><i class="icon-plus"></i> New Note</a>
        </p>
      </div>
      <a v-for="note in notes" v-on:click="showNote(note)" class="panel-block is-active">{{ note.title }}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'v-sideBar',
  computed: {
    notes () {
      return this.$store.getters.notes
    }
  },
  methods: {
    showNote (note) {
      this.$store.dispatch('showNote', note)
    },
    newNote () {
      this.$store.dispatch('newNote')
    }
  }
}
</script>

<style lang="scss" scoped>
    .sideBar {
        padding: 2rem;
    }
</style>
