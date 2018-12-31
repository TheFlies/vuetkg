
<template lang="pug">
#manga
  tkg-manga-header
  .wrapper
    b-container#shelves(fluid)
      b-row
        b-col
          tkg-flip-book
      b-row.d-flex.align-items-end.justify-content-md-center(align-v='end')
        template(v-for="book in books")
          b-col.oomb-5(xl='2', lg='3', sm='6', md='4', @click.prevent='openBook(book)')
            b-card.text-center.mb-2.text-uppercase(:title='book.title',
              :sub-title='book.author',
              :img-src='book.cover.url', :img-alt='book.title', img-top)
    tkg-footer
</template>

<script>
import fb from '@/modules/fbase.js'
import TkgMangaHeader from '@/components/common/manga/MangaHeader'
import TkgFooter from '@/components/common/Footer'
import TkgFlipBook from '@/components/common/manga/FlipBook'

let mangasRef = fb.dbFirestore.collection('mangas')
let imgsRef = fb.storage.ref('manga')

export default {
  name: 'tkg-manga',
  components: {
    TkgMangaHeader,
    TkgFooter,
    TkgFlipBook
  },
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
          book.id = parseInt(doc.id)
          // latest vol
          let latestVol = (book.latestVol || {}).id || 1
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
      let user = this.$store.state.user
      let readingStatus = ((user || {}).reading || []).find(b => b.manga === book.id)
      let currentVol = (readingStatus || {}).volume || 1
      let currentPage = (readingStatus || {}).page || 1
      this.$router.push(`/manga/${book.id}/${currentVol}?p=${currentPage}`)
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
$header: 56px;
$footer: 91.39px;
#shelves {
  max-height: 1024px;
  height: calc(100vh - #{$header} - #{$footer});
  overflow-y: auto;
}
</style>
