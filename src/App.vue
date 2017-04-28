<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'

firebase.initializeApp({ databaseURL: 'https://vue-notes-c0148.firebaseio.com/' })

export default {
  name: 'app'
}
</script>

<style lang="sass">
@import 'assets/base'

.app-container
  width: 60%
  @media screen and (max-width: 768px)
    width: 100%

#app
  font-family: 'Avenir'
  margin-top: 20px
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
