<template lang="pug">
#manga
  tkg-manga-header
  .wrapper
    b-container
      b-row.justify-content-md-center(align-v='end')
        template(v-for="book in books")
          b-col.oomb-5(lg='4', sm='6', md='6', @click.prevent='openBook(book)')
            b-card.text-center.mb-2.text-uppercase(:title='book.title',
              :sub-title='book.author',
              :img-src='book.cover.url', :img-alt='book.title', img-top)
    tkg-footer
</template>

<script>
// import firebase from 'firebase'
import fb from '../../firebase.js'
let mangasRef = fb.dbFirestore.collection('mangas')
let imgsRef = fb.storage.ref('manga')

import TkgMangaHeader from '@/component/common/MangaHeader'
import TkgFooter from '@/component/common/Footer'

export default {
  name: 'tkg-manga',
  components: {TkgMangaHeader, TkgFooter},
  data () {
    return {
      label: 'Test Me',
      alignEnd: false,
      checked: true,
      changeCount: 0,
      favorited: true,
      favoritedLabel: 'Remove from favorites',
      showIcon: true,
      showLabel: 'Hide icon toggle',
      msg: 'Welcome to Your Vue.js App',
      slideValue: 50,
      sliderDisabled: false,
      books: [
        // {
        //   'title': 'Harry Potter',
        //   'color': 'green',
        //   'cover': {
        //     'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=Harry+Potter&w=300&h=500',
        //     'width': 300,
        //     'height': 500
        //   }
        // },
        // {
        //   'title': 'Hai vạn dặm dưới đáy biển',
        //   'color': 'green',
        //   'cover': {
        //     'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hai+van+dam+duoi+day+bien&w=400&h=500',
        //     'width': 400,
        //     'height': 500
        //   }
        // },
        // {
        //   'title': 'Hai vạn dặm dưới đáy biển',
        //   'color': 'green',
        //   'cover': {
        //     'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hai+van+dam+duoi+day+bien&w=700&h=300',
        //     'width': 700,
        //     'height': 300
        //   }
        // },
        // {
        //   'title': 'Hai vạn dặm dưới đáy biển',
        //   'color': 'green',
        //   'cover': {
        //     'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hai+van+dam+duoi+day+bien&w=300&h=500',
        //     'width': 300,
        //     'height': 500
        //   }
        // },
        // {
        //   'title': 'Hai vạn dặm dưới đáy biển',
        //   'color': 'green',
        //   'cover': {
        //     'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hai+van+dam+duoi+day+bien&w=300&h=500',
        //     'width': 300,
        //     'height': 500
        //   }
        // },
        // {
        //   'title': 'Hai vạn dặm dưới đáy biển',
        //   'color': 'green',
        //   'cover': {
        //     'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hai+van+dam+duoi+day+bien&w=300&h=500',
        //     'width': 300,
        //     'height': 500
        //   }
        // },
        // {
        //   'title': 'Hai vạn dặm dưới đáy biển',
        //   'color': 'green',
        //   'cover': {
        //     'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hai+van+dam+duoi+day+bien&w=300&h=500',
        //     'width': 300,
        //     'height': 500
        //   }
        // },
        // {
        //   'title': 'Hai vạn dặm dưới đáy biển',
        //   'color': 'green',
        //   'cover': {
        //     'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hai+van+dam+duoi+day+bien&w=300&h=500',
        //     'width': 300,
        //     'height': 500
        //   }
        // }
      ]
    }
  },
  mounted() {
    this.getBooks()
  },
  methods: {
    bookCoverStyle(cover) {
      // console.log(`[{ 'background-image': '${cover.url}'}, {'width': '${cover.width}'}, {'height': '${cover.height}'} ]`)
      // return `[{ 'background-image': '${cover.url}'}, {'width': '${cover.width}'}, {'height': '${cover.height}'} ]`
      return {
        'background-image': `url(${cover.url})`,
        'width': `${cover.width}px`,
        'height': `${cover.height}px`
      }
    },
    getBooks() {
      mangasRef.get().then(querySnapshot => {
        // this.books = []
        querySnapshot.forEach(doc => {
          let book = doc.data()
          // latest vol
          let latestVol = book.latestVol ? book.latestVol.id || 1 : 1
          let path = `/${book.title}/${latestVol}/000.jpg`
          // getting cover url
          imgsRef.child(path).getDownloadURL().then((url) => {
            book.cover.url = url
            this.books.push(book)
          })
        })
      })
    },
    openBook(book) {
      console.log('open ' + book.title + ' id: ' + book.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.oomb-5 {
  margin-bottom: 5px;
  margin-top: 15px;
  cursor: pointer;
}

.oomb-5 .card-img-top {
  max-height: 450px;
}
</style>
