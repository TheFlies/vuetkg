<template lang="pug">
#manga
  tkg-manga-header(:page-num='currentPage', :total-page='pages.length', v-on:changePage='scrollTo', fixed='top')
  .wrapper
    b-container(fluid)
      b-row(align-h='center')
        #side.mx-auto
            b-btn(@click.prevent='toggleRectDrawing')
              i.fa.fa-pencil
        b-container.main(fluid)
          b-col.m-0.p-0(sm='12')
            b-container#shelves(fluid)
              b-row(v-if='pageLoading')
                b-col(sm='12')
                  b-img(:src='loadingUrl', center)
            page-reader(v-if='pages', v-for='page in pages', :page='page', :key='page.num', :id="'page_'+page.num",
              :imgSrc='page.path',
              :dre='drawRectEnabled',
              :dee='drawEllipseEnabled',
              :currentText='currentText',
              @imgloaded='imgLoaded(page.num)',
            )
            .drawing
              b-form-textarea(v-model='currentText', placeholder='rawed', rows=3, max-rows=5, ref='inpt')
      b-row
        tkg-footer(style='width:100%; height:100%')
</template>

<script>
import fb from '../../firebase.js'
let mangasRef = fb.dbFirestore.collection('mangas')

import TkgMangaHeader from '@/component/common/MangaHeader'
import TkgFooter from '@/component/common/Footer'

import PCanvas from '@/component/common/PCanvas'
import PageReader from '@/component/common/PageReader'

import VueScrollTo from 'vue-scrollto'

import EventBus from '@/event-bus'

let options = {
  container: 'body',
  easing: 'ease-in',
  offset: -56,
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
  components: {
    TkgMangaHeader,
    TkgFooter,
    PageReader,
    // TkgFlipBook,
    PCanvas
  },
  data () {
    return {
      loadingUrl: '/static/images/img-loading.gif',
      volume: null,
      chapter: null,
      pages: [],
      currentPage: 1,
      book: null,
      books: [],
      pageLoading: false,
      p: null,
      drawRectEnabled: false,
      drawEllipseEnabled: false,
      currentText: null
    }
  },
  mounted() {
    this.p = parseInt(this.$route.query.p)
    document.addEventListener('scroll', this.updatePage)
  },
  updated() {
    document.addEventListener('scroll', this.updatePage)
  },
  methods: {
    toggleRectDrawing() {
      console.log('toggle drawing rect')
      this.drawRectEnabled = !this.drawRectEnabled
    },
    toggleEllipseDrawing() {
      this.drawEllipseEnabled = !this.drawEllipseEnabled
    },
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
              page.imgRef = `/${this.book.title}/${currentVol}/${page.file}`
              this.pages.push(page)
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
    imgLoaded(page) {
      if (this.p && this.p === page) {
        this.scrollTo(this.p)
      }
    },
    updatePage() {
      let cp = document.getElementById(`page_${this.currentPage}`)
      if (cp) {
        let br = cp.getBoundingClientRect()
        let top = br.top - 56
        let bottom = br.bottom
        let clientHeight = document.documentElement.clientHeight - 56 // - 91.39

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
    },
    keyboardHandler(evt) {
      if (evt.keyCode === 46) {
        // emit delete on current page
        EventBus.$emit('pr:delete', 'can_' + this.currentPage)
        this.$emit('delete', 'can_' + this.currentPage)
      }
    }
  },
  created() {
    this.volume = this.$route.params.volume
    this.chapter = this.$route.params.chapter
    this.p = parseInt(this.$route.query.p)

    this.getBook(this.$route.params.id)
    this.pageLoading = true

    document.addEventListener('keyup', this.keyboardHandler)
  },
  destroyed() {
    document.removeEventListener('scroll', this.updatePage)
    document.removeEventListener('keyup', this.keyboardHandler)
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

// $header: 56px;
// $footer: 91.39px;
#side {
  position: fixed;
  float: left;
  left: 10px;
  top: 61px;
  width: 45px;
}

.main {
  padding-left: 45px;
}

.wrapper {
  margin-top: 56px;
}

.bgimg {
  // background-image: url("/static/images/wood.jpg");
  // background-position: top left;
  // background-repeat: repeat repeat;
  // background-size: auto;
}

// #shelves {
//   max-height: 1024px;
//   height: calc(100vh);
//   overflow-y: auto;
// }

// #footer {
//   // bottom: 0;
//   width: 100%;
// }
.drawing {
  position: fixed;
  width: 260px;
  bottom: 15px;
  right: 5px;
}
</style>
