<template lang="pug">
.container.app-container
  .nav.menu
    .container
      .nav-left
        .nav-item.is-tab
          h1.title All Notes
      .nav-right
        a.nav-item.is-pulled-right
          button.button.is-primary(@click='modalActive = true')
            i.fa.fa-plus
  hr
  br
  button.button.is-loading.is-fullwidth(v-show='notes.length == 0', style='border: 0')
  div(v-for='note in orderedNotes')
    a(:href="'#/note/' + note['.key']")
      .card
        .card-content
          p.note-title {{ note.title }}
          p Edited {{ editedTime(note) }}
  .modal(:class="{ 'is-active': modalActive }")
    .modal-background
    .modal-content
      .box
        .field
          label.label Title
          p.control
            input.input(type='text', placeholder='Note Title', v-model='newNote.title', @keyup.enter='createNote')
        .field
          p.control
            button.button.is-primary(@click='createNote') Create
    |
    button.modal-close(@click='modalActive = false')
</template>

<script>
import fromNow from '../filters'
import firebase from 'firebase'

export default {
  name: 'notes-list',
  firebase: {
    notes: firebase.database().ref('notes')
  },
  methods: {
    createNote () {
      this.newNote.timestamp = firebase.database.ServerValue.TIMESTAMP
      this.$firebaseRefs.notes.push(this.newNote)
      this.newNote.title = ''
      this.newNote.timestamp = null
      this.modalActive = false
    },
    editedTime (note) {
      return fromNow(note.timestamp)
    }
  },
  computed: {
    orderedNotes: function () {
      return this.notes.sort(function (a, b) {
        return a.timestamp > b.timestamp
      })
    }
  },
  data () {
    return {
      modalActive: false,
      newNote: {
        title: '',
        text: '',
        timestamp: null
      }
    }
  }
}
</script>

<style src="./NotesList.sass" lang="sass"></style>
