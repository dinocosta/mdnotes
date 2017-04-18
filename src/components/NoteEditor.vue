<template lang="pug">
.container.app-container
  .nav.menu
    .container
      .nav-left
        .nav-item.is-tab
          h1.title {{ note.title }}
      .nav-right
        a.nav-item.is-pulled-right
          button.button.is-outlined(@click='$router.push("/#")')
            i.fa.fa-fw.fa-arrow-left
          button.button.is-danger(@click='destroyNote')
            i.fa.fa-fw.fa-trash
          button.button.is-primary(@click='saveNote')
            i.fa.fa-fw.fa-pencil(v-show='!editing')
            i.fa.fa-fw.fa-check(v-show='editing')
  hr
  br
  button.button.is-loading.is-fullwidth(v-show='note.timestamp == null', style='border: 0')
  .note-text(v-show='!editing', v-html='mdnote')
  textarea(v-show='editing', v-model='note.text')
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
      editing: false
    }
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
          timestamp: firebase.database.ServerValue.TIMESTAMP
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

<style lang="sass">
.note-text
  width: 97%
  margin: auto

textarea
  width: 97%
  border: none
  font-size: 1rem
  color: #4a4a4a
  line-height: 1.5
  resize: none
  height: 100%
  outline: none
  margin-left: 1.5%
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

h1{ font-size: 2em; }
h2 { font-size: 1.5em; }
h3 { font-size: 1.17em; }
h4 { font-size: 1.12em; }
h5 { font-size: .83em; }
h6 { font-size: .75em; }
</style>
