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
import db from '../../firebase.js'
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
