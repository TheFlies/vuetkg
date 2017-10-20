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
import fb from '../../firebase.js'
let booksRef = fb.db.ref('books')

export default {
  name: 'tkg-book',
  firebase: {
    books: booksRef
  }
}
</script>

<style lang="scss" scoped>
</style>
