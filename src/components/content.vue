<template>
  <div class="box">
    <div v-if="show">
      <div class="field">
        <label class="label">Title</label>
        <p class="control">
          <input class="input" type="text" placeholder="Title ..." v-model="activeNotes.title">
        </p>
      </div>

      <div class="field">
        <label class="label">Note:</label>
        <p class="control">
          <textarea class="textarea" placeholder="There you go ..." v-model="activeNotes.content"></textarea>
        </p>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <button v-on:click="updateNote()" class="button is-primary">Submit</button>
        </p>
        <p class="control">
          <button v-on:click="closeNote()" class="button is-link">Cancel</button>
        </p>
        <p class="control">
          <button v-on:click="deleteNote(activeNotes)" class="button is-link">
            <i class="icon-bin"></i>
          </button>
        </p>
      </div>
    </div>
    <div v-else="show">
      There is no content for showing :\ (Create new note or select a note)
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-content',
  computed: {
    show () {
      return this.$store.getters.holders.empty
    },
    activeNotes () {
      return this.$store.getters.activeNotes
    }
  },
  methods: {
    closeNote () {
      this.$store.dispatch('closeNote')
    },
    deleteNote (note) {
      this.$store.dispatch('deleteNote', note)
    },
    updateNote () {
      const updateDate = new Date()
      const note = {
        id: this.activeNotes.id,
        title: this.activeNotes.title,
        content: this.activeNotes.content,
        date: updateDate.getHours() + ':' + updateDate.getMinutes() + ':' + updateDate.getSeconds()
      }
      this.$store.dispatch('updateNote', note)
    }
  }
}
</script>
