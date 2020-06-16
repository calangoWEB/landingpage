import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCilThlErHl_xxToDzpBOUUTjtEzMSJjIQ",
  authDomain: "landingpagevuetify.firebaseapp.com",
  databaseURL: "https://landingpagevuetify.firebaseio.com",
  projectId: "landingpagevuetify",
  storageBucket: "landingpagevuetify.appspot.com",
  messagingSenderId: "346957472463",
  appId: "1:346957472463:web:574a77270853e2e0764dba"
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
