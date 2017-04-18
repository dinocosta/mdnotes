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
          button.button.is-danger
            i.fa.fa-fw.fa-trash
          button.button.is-primary(@click='editing = !editing')
            i.fa.fa-fw.fa-pencil(v-show='!editing')
            i.fa.fa-fw.fa-check(v-show='editing')
  hr
  br
  button.button.is-loading.is-fullwidth(v-show='note.timestamp == null', style='border: 0')
  p(v-show='!editing') {{ note.text }}
  textarea(v-show='editing', v-model='note.text')
</template>

<script>
import firebase from 'firebase'

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
        source: firebase.database().ref('notes/' + this.$route.params.id),
        asObject: true
      }
    }
  }
}
</script>

<style lang="sass">
p
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
</style>
