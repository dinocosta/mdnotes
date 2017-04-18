import Vue from 'vue'
import Router from 'vue-router'
import NotesList from '@/components/NotesList'
import NoteEditor from '@/components/NoteEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notes List',
      component: NotesList
    },
    {
      path: '/note/:id',
      name: 'Note Editor',
      component: NoteEditor
    }
  ]
})
