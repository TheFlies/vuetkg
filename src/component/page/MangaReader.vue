<template lang="pug">
#manga
  tkg-manga-header(page-num)
  .wrapper
    b-container#shelves(fluid)
      b-row(v-if='pages', v-for='page in pages', :key='page.num')
        b-col(sm='12')
          .d-flex.justify-content-center.align-items-center(:id="'page_'+page.num")
            img(:src='page.path')
    tkg-footer
</template>

<script>
// import firebase from 'firebase'
import fb from '../../firebase.js'
let mangasRef = fb.dbFirestore.collection('mangas')
let imgsRef = fb.storage.ref('manga')

import TkgMangaHeader from '@/component/common/MangaHeader'
import TkgFooter from '@/component/common/Footer'
import TkgFlipBook from '@/component/common/FlipBook'

export default {
  name: 'tkg-manga-reader',
  components: {TkgMangaHeader, TkgFooter, TkgFlipBook},
  data () {
    return {
      volume: null,
      chapter: null,
      pages: [],
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
      book: null,
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
    this.volume = this.$route.params.volume
    this.chapter = this.$route.params.chapter

    this.getBook(this.$route.params.id)
  },
  methods: {
    bookCoverStyle(cover) {
      return {
        'background-image': `url(${cover.url})`,
        'width': `${cover.width}px`,
        'height': `${cover.height}px`
      }
    },
    getBook(id) {
      let bookRef = mangasRef.doc(id)
      bookRef.get().then(book => {
        if (book.exists) {
          this.book = book.data()
          this.book.id = book.id
          let currentVol = this.volume || 1
          let volumeRef = bookRef.collection('volumes').doc(currentVol)
          volumeRef.collection('pages').orderBy('num').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              let page = doc.data()
              imgsRef.child(`/${this.book.title}/${currentVol}/${page.file}`).getDownloadURL().then((url) => {
                page.path = url
                this.pages.splice(page.num - 1, 0, page)
              })
            })
          }).catch(error => {
            console.log('Error getting documents: ', error)
          })
        }
      })
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
$footer: 109px;

#shelves {
  max-height: 1024px;
  height: calc(100vh - #{$header} - #{$footer});
  overflow-y: auto;
}

// #footer {
//   // bottom: 0;
//   width: 100%;
// }
</style>
