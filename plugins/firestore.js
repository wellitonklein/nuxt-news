import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  // Configuração do Firebase do seu aplicativo da Web
  const firebaseConfig = {
    apiKey: "AIzaSyBXnH8lCdxcSNudLYNlGrXLoxz6i8bobfU",
    authDomain: "nuxt-news-feed-4ae50.firebaseapp.com",
    databaseURL: "https://nuxt-news-feed-4ae50.firebaseio.com",
    projectId: "nuxt-news-feed-4ae50",
    storageBucket: "nuxt-news-feed-4ae50.appspot.com",
    messagingSenderId: "924969952770",
    appId: "1: 924969952770: web: 863830af48437eb8"
  }
  // Inicializar o Firebase
  firebase.initializeApp (firebaseConfig)
  firebase.firestore().settings({
    timestampsInSnapshots: true
  })
}

const db = firebase.firestore()

export default db
