<template lang="pug">
#manga
  table
    thead: tr
      th Title
      th Author
    tbody: tr(v-for='book in books')
      td: a {{book.name}}
      td {{book.author}}
</template>

<script>
import Firebase from 'firebase'

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyA_HE_wTvXEr3YojYi8DbzVP4pVsez2L_o',
  authDomain: 'tkg-vue.firebaseapp.com',
  databaseURL: 'https://tkg-vue.firebaseio.com',
  projectId: 'tkg-vue',
  storageBucket: 'tkg-vue.appspot.com',
  messagingSenderId: '645087845803'
}
let app = Firebase.initializeApp(config)

let db = app.database()
let booksRef = db.ref('books')

export default {
  name: 'tkg-books',
  firebase: {
    books: booksRef
  }
}
</script>

<style lang="scss" scoped>
</style>
