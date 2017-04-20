import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  holders: {
    empty: false
  },
  notes: [
    {
      id: 1,
      title: 'First Note',
      content: 'A simple note app',
      date: ''
    },
    {
      id: 2,
      title: 'Second Note',
      content: 'A note app',
      date: ''
    }
  ],
  activeNotes: []
}

const mutations = {
  NEW_NOTE (state, payload) {
    const lastId = state.notes.length + 1
    let date = new Date()
    const newNote = {
      id: lastId,
      title: 'New Note',
      content: '',
      date: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    }
    state.notes.push(newNote)
    state.activeNotes = newNote
  },
  SHOW_NOTE (state, payload) {
    state.activeNotes = payload
    state.holders.empty = true
  },
  UPDATE_NOTE (state, payload) {
    const note = state.notes.find(note => {
      return note.id === payload.id
    })
    note.title = payload.title
    note.content = payload.content
    note.date = payload.date
  },
  DELETE_NOTE (state, payload) {
    const note = state.notes.find(note => {
      return note.id === payload.id
    })
    state.notes.splice(state.notes.indexOf(note), 1)
    state.activeNotes = []
    state.holders.empty = false
  },
  CLOSE_NOTE (state) {
    state.holders.empty = false
  }
}

export const store = new Vuex.Store({
  state,
  getters: {
    notes (state) {
      return state.notes
    },
    activeNotes (state) {
      return state.activeNotes
    },
    holders (state) {
      return state.holders
    }
  },
  mutations,
  actions: {
    newNote (context) {
      context.commit('NEW_NOTE')
    },
    showNote (context, note) {
      context.commit('SHOW_NOTE', note)
    },
    updateNote (context, note) {
      context.commit('UPDATE_NOTE', note)
    },
    deleteNote (context, note) {
      context.commit('DELETE_NOTE', note)
    },
    closeNote (context) {
      context.commit('CLOSE_NOTE')
    }
  }
})
