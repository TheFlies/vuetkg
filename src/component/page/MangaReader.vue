<template lang="pug">
#manga
  tkg-manga-header(:page-num='currentPage', :total-page='pages.length', v-on:changePage='scrollTo')
  .wrapper
    b-container#shelves(fluid)
      b-row(v-if='pageLoading')
        b-col(sm='12')
          b-img(:src='loadingUrl', center)
      b-row(v-if='pages', v-for='page in pages', :key='page.num', :id="'page_'+page.num")
        b-col(sm='12')
          //- .d-flex.justify-content-center.align-items-center(:id="'page_'+page.num")
          b-img-lazy(:src='page.path', center, blank-color='rgba(128,255,255,0.5)')
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

import VueScrollTo from 'vue-scrollto'

let options = {
  container: '#shelves',
  easing: 'ease-in',
  offset: 0,
  cancelable: false,
  onDone: function() {
    // scrolling is done
  },
  onCancel: function() {
    // scrolling has been interrupted
  },
  x: false,
  y: true
}

export default {
  name: 'tkg-manga-reader',
  components: {TkgMangaHeader, TkgFooter, TkgFlipBook},
  data () {
    return {
      loadingUrl: '/static/images/img-loading.gif',
      volume: null,
      chapter: null,
      pages: [],
      currentPage: 1,
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
      ],
      pageLoading: false
    }
  },
  mounted() {
    this.volume = this.$route.params.volume
    this.chapter = this.$route.params.chapter

    this.getBook(this.$route.params.id)
    this.pageLoading = true

    let shelves = document.getElementById('shelves')
    shelves.addEventListener('scroll', this.updatePage)
  },
  updated() {
    let shelves = document.getElementById('shelves')
    shelves.addEventListener('scroll', this.updatePage)
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
              this.pages.push(page)
              let idx = this.pages.length - 1
              imgsRef.child(`/${this.book.title}/${currentVol}/${page.file}`).getDownloadURL().then((url) => {
                page.path = url
                this.pages.splice(idx, 1, page)
              })
              if (this.pageLoading) {
                this.pageLoading = false
              }
            })
          }).catch(error => {
            console.log('Error getting documents: ', error)
          })
        }
      })
    },
    // Finds y value of given object
    // findPos(obj) {
    //   var curtop = 0
    //   if (obj.offsetParent) {
    //     do {
    //       curtop += obj.offsetTop
    //       obj = obj.offsetParent
    //     } while (obj)
    //     return [curtop]
    //   }
    // },
    updatePage() {
      let cp = document.getElementById(`page_${this.currentPage}`)
      if (cp) {
        let br = cp.getBoundingClientRect()
        let top = br.top - 56
        let bottom = br.bottom
        let clientHeight = document.documentElement.clientHeight - 56 - 109

        if (bottom <= Math.round(clientHeight / 2)) {
          if (this.currentPage < this.pages.length) {
            this.currentPage++
          }
        } else {
          if (top >= clientHeight) {
            if (this.currentPage > 1) {
              this.currentPage--
            }
          }
        }
      }
    },
    scrollTo(page) {
      if (page !== this.currentPage) {
        // console.log('scroll to ' + page)
        // let shelves = document.getElementById('shelves')
        let cp = document.getElementById(`page_${page}`)
        if (cp) {
          // shelves.scrollTo(0, this.findPos(cp))
          VueScrollTo.scrollTo(cp, 500, options)
        }
      }
    }
  },
  created() {
    // console.log('scrolling initialized')
    // let shelves = document.getElementById('shelves')
    // shelves.addEventListener('scroll', this.updatePage)
  },
  beforeDestroyed() {
    console.log('scrolling removed')
    let shelves = document.getElementById('shelves')
    shelves.removeEventListener('scroll', this.updatePage)
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
