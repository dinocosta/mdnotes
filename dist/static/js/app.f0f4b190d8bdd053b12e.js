webpackJsonp([1],[,,,,,,,function(t,e,a){"use strict";var s=a(4),i=a(37),n=a(33),o=a.n(n),r=a(32),l=a.n(r);s.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Notes List",component:o.a},{path:"/note/:id",name:"Note Editor",component:l.a}]})},function(t,e,a){a(16);var s=a(3)(a(13),a(34),null,null);t.exports=s.exports},,,function(t,e,a){"use strict";function s(t){var e=Date.now()/1e3-Number(t);return e<3600?i(~~(e/60)," minute"):e<86400?i(~~(e/3600)," hour"):i(~~(e/86400)," day")}function i(t,e){return 1===t?t+e:t+e+"s ago"}e.a=s},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(4),i=a(9),n=a.n(i),o=a(8),r=a.n(o),l=a(7);s.a.use(l.a),s.a.use(n.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:l.a,template:"<App/>",components:{App:r.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2);a.n(s).a.initializeApp({databaseURL:"https://vue-notes-c0148.firebaseio.com/"}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),i=a.n(s),n=a(6),o=a.n(n),r=a(28),l=a.n(r),c=a(10);a.n(c);e.default={name:"note-editor",data:function(){return{editing:!1}},firebase:function(){return{note:{source:i.a.database().ref("notes").child(this.$route.params.id),asObject:!0}}},computed:{mdnote:function(){return l()(this.note.text)}},methods:{saveNote:function(){this.editing=!this.editing,o()("textarea").autogrow(),o()("textarea").focus(),this.editing||i.a.database().ref("notes").child(this.$route.params.id).update({text:this.note.text,timestamp:i.a.database.ServerValue.TIMESTAMP})},destroyNote:function(){i.a.database().ref("notes").child(this.$route.params.id).remove(),this.$router.push("/#")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(11),i=a(2),n=a.n(i);e.default={name:"notes-list",firebase:{notes:n.a.database().ref("notes")},methods:{createNote:function(){this.newNote.timestamp=n.a.database.ServerValue.TIMESTAMP,this.$firebaseRefs.notes.push(this.newNote),this.newNote.title="",this.newNote.timestamp=null,this.modalActive=!1},editedTime:function(t){return a.i(s.a)(t.timestamp)}},computed:{orderedNotes:function(){return this.notes.sort(function(t,e){return t.timestamp>e.timestamp})}},data:function(){return{modalActive:!1,newNote:{title:"",text:"",timestamp:null}}}}},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,function(t,e,a){a(17);var s=a(3)(a(14),a(35),null,null);t.exports=s.exports},function(t,e,a){a(18);var s=a(3)(a(15),a(36),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container app-container"},[a("div",{staticClass:"nav menu"},[a("div",{staticClass:"container"},[a("div",{staticClass:"nav-left"},[a("div",{staticClass:"nav-item is-tab"},[a("h1",{staticClass:"title"},[t._v(t._s(t.note.title))])])]),a("div",{staticClass:"nav-right"},[a("a",{staticClass:"nav-item is-pulled-right"},[a("button",{staticClass:"button is-outlined",on:{click:function(e){t.$router.push("/#")}}},[a("i",{staticClass:"fa fa-fw fa-arrow-left"})]),a("button",{staticClass:"button is-danger",on:{click:t.destroyNote}},[a("i",{staticClass:"fa fa-fw fa-trash"})]),a("button",{staticClass:"button is-primary",on:{click:t.saveNote}},[a("i",{directives:[{name:"show",rawName:"v-show",value:!t.editing,expression:"!editing"}],staticClass:"fa fa-fw fa-pencil"}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"}],staticClass:"fa fa-fw fa-check"})])])])])]),a("hr"),a("br"),a("button",{directives:[{name:"show",rawName:"v-show",value:null==t.note.timestamp,expression:"note.timestamp == null"}],staticClass:"button is-loading is-fullwidth",staticStyle:{border:"0"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.editing,expression:"!editing"}],staticClass:"note-text",domProps:{innerHTML:t._s(t.mdnote)}}),a("textarea",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"model",rawName:"v-model",value:t.note.text,expression:"note.text"}],domProps:{value:t.note.text},on:{input:function(e){e.target.composing||(t.note.text=e.target.value)}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container app-container"},[a("div",{staticClass:"nav menu"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"nav-right"},[a("a",{staticClass:"nav-item is-pulled-right"},[a("button",{staticClass:"button is-primary",on:{click:function(e){t.modalActive=!0}}},[a("i",{staticClass:"fa fa-plus"})])])])])]),a("hr"),a("br"),a("button",{directives:[{name:"show",rawName:"v-show",value:0==t.notes.length,expression:"notes.length == 0"}],staticClass:"button is-loading is-fullwidth",staticStyle:{border:"0"}}),t._l(t.orderedNotes,function(e){return a("div",[a("a",{attrs:{href:"#/note/"+e[".key"]}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"note-title"},[t._v(t._s(e.title))]),a("p",[t._v("Edited "+t._s(t.editedTime(e)))])])])])])}),a("div",{staticClass:"modal",class:{"is-active":t.modalActive}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"box"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Title")]),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.title,expression:"newNote.title"}],staticClass:"input",attrs:{type:"text",placeholder:"Note Title"},domProps:{value:t.newNote.title},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.createNote(e)},input:function(e){e.target.composing||(t.newNote.title=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",on:{click:t.createNote}},[t._v("Create")])])])])]),a("button",{staticClass:"modal-close",on:{click:function(e){t.modalActive=!1}}})])],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-left"},[a("div",{staticClass:"nav-item is-tab"},[a("h1",{staticClass:"title"},[t._v("All Notes")])])])}]}}],[12]);
//# sourceMappingURL=app.f0f4b190d8bdd053b12e.js.map