<template lang="pug">
.container.app-container
  h1 {{ note.title }}
  .nav.menu
    .container
      .nav-left
        .nav-item.is-tab
          button.button.is-outlined.is-medium(@click='modalActive = editing || $router.push("/#")')
            i.fa.fa-fw.fa-arrow-left
          button.button.is-danger.is-medium(@click='deleteModalActive = true')
            i.fa.fa-fw.fa-trash
          button.button.is-primary.is-medium(@click='saveNote')
            i.fa.fa-fw.fa-pencil(v-show='!editing')
            i.fa.fa-fw.fa-check(v-show='editing')
      .nav-right
  hr.primary-separator
  br
  button.button.is-loading.is-fullwidth(v-show='note.created_at == null', style='border: 0')
  .note-text(v-show='!editing', v-html='mdnote')
  textarea(v-show='editing', v-model='note.text')
  .modal(:class="{ 'is-active': modalActive }")
    .modal-background
    .modal-content
      .box
        .field
          p.control
            | you will lose unsaved work if you leave, are you sure?
        .field.is-grouped
          p.control
            button.button.is-primary(@click='modalActive = false') Stay
          p.control
            button.button.is-danger.is-pulled-right(@click='$router.push("/#")') Leave
    button.modal-close(@click='modalActive = false')
  .modal(:class="{ 'is-active': deleteModalActive }")
    .modal-background
    .modal-content
      .box
        .field
          p.control
            | Are you sure you want to delete this note?
        .field.is-grouped
          p.control
            button.button.is-primary(@click='deleteModalActive = false') Cancel
          p.control
            button.button.is-danger.is-pulled-right(@click='destroyNote') Delete
    button.modal-close(@click='deleteModalActive = false')
</template>

<script>
import firebase from 'firebase'
import $ from 'jquery'
import marked from 'marked'
import 'autogrow'

export default {
  name: 'note-editor',
  data () {
    return {
      editing: false,
      modalActive: false,
      deleteModalActive: false
    }
  },
  created () {
    // Stop editing and save note if user presses Escape key.
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.editing) {
        this.saveNote()
      }
      if (!this.editing) {
        if (e.keyCode === 8) {
          this.$router.push('/#')
        }
      }
    })
  },
  firebase () {
    return {
      note: {
        source: firebase.database().ref('notes').child(this.$route.params.id),
        asObject: true
      }
    }
  },
  computed: {
    mdnote () {
      return marked(this.note.text)
    }
  },
  methods: {
    saveNote () {
      this.editing = !this.editing
      $('textarea').autogrow()
      $('textarea').focus()
      if (!this.editing) {
        firebase.database().ref('notes').child(this.$route.params.id).update({
          text: this.note.text,
          updated_at: firebase.database.ServerValue.TIMESTAMP
        })
      }
    },
    destroyNote () {
      firebase.database().ref('notes').child(this.$route.params.id).remove()
      this.$router.push('/#')
    }
  }
}
</script>

<style lang="sass" src="./NoteEditor.sass"></style>
