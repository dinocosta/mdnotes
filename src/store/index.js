import firebase from 'firebase/app'

const config = {
  databaseURL: 'https://vue-notes-c0148.firebaseio.com/'
}

firebase.initializeApp(config)
const store = {}
const notesRef = firebase.database().ref('notes')

export default store

store.notes = function () {
  notesRef.once('value').then(function (snapshot) {
    return snapshot
  })
}
