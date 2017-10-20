<template lang="pug">
#manga
  tkg-manga-header
  .wrapper
    b-container
      //- .bookshelf--frame
      b-row.justify-content-md-center(align-v='end')
        template(v-for="book in books")
          b-col.oomb-5(lg='4', sm='6', md='6')
            //-     .book-wrapper
            b-card.text-center.mb-2.text-uppercase(:title='book.title',
              :sub-title='book.author',
              :img-src='book.cover.url', :img-alt='book.title', img-top)
              //- img.card-img-top.img-responsive(:src='book.cover.url', alt='book.title')
              //- .card-body  
    //- .row.shelf(v-if="books.length>0")
      //- .bookshelf--frame
        template(v-for="book in books")
          .book-wrapper
            //- .cover(:style='bookCoverStyle(book.cover)')
            img(:src='book.cover.url', :width='book.cover.width', :height='book.cover.height', alt='book.title')
            span {{book.title}}
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
          let path = `/${book.title}/1/000.jpg`
          // getting cover url
          imgsRef.child(path).getDownloadURL().then((url) => {
            book.cover.url = url
            this.books.push(book)
          })
        })
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
}

.oomb-5 .card-img-top {
  max-height: 450px;
}
// .container {
//   max-width: 60em;
//   @include make-container();
// }
// .row {
//   @include make-row();
// }
// .content-main {
//   @include make-col-ready();

//   @media (max-width: 32em) {
//     @include make-col(6);
//   }
//   @media (min-width: 32.1em) {
//     @include make-col(8);
//   }
// }
// .content-secondary {
//   @include make-col-ready();

//   @media (max-width: 32em) {
//     @include make-col(6);
//   }
//   @media (min-width: 32.1em) {
//     @include make-col(4);
//   }
// }
// .card {
//   margin-bottom: 0px;
// }

// variables
// $darktan: #9A8548;
// $grad2: #373737;
// $grad1: darken($grad2, 2);
// $grad3: lighten($darktan, 4);
// $grad5: darken($darktan, 4);

// .bookshelf--frame {
//   max-width: 1200px;
//   margin: 0 auto;
// }

// .bookshelf--frame {
// 	background: tan;
// 	background: url('https://static.tumblr.com/8x9m588/C8ho55ylx/bg-wood2.png'),
//     linear-gradient($grad1,$grad2 290px,$grad3 290px,$grad3 292px,$darktan 292px,$darktan 298px,$grad5 298px,$grad5 300px);	
// 	background-size: auto, 10px 300px;
// 	border-left: 10px solid $darktan;
// 	border-right: 10px solid $darktan;
// 	text-align: center;
// 	&:first-of-type {
// 		border-top: 10px solid $darktan;
// 	}
// 	.book-wrapper {
// 		display: inline-block;
// 		width: 290px;
// 		vertical-align: bottom;
// 		height: 280px;
// 		position: relative;
// 		margin: 10px 0;
// 		max-width: 100%;
//     border-bottom-left-radius: 6px;
//     border-bottom-right-radius: 6px;
//     .card {
//       background: none;
//       position: absolute;
//       left: 50%;
//       transform: translateX(-50%);
//       max-height: 50%;
//       z-index: 2;
//       bottom: 0;
//       margin-bottom: 0;
//     }
// 		img {
//       height: auto;
//       width: auto;
// 			position: absolute;
// 			bottom: 0;
// 			left: 50%;
//       transform: translateX(-50%);
// 			max-height: 100%;
// 			max-width: 100%;
//       z-index: 1;
// 		}
// 	}
// }

// .book {
//   padding: 15px 0 0 0;
//   margin:auto;
// }

// .book-img>.card:before {
//   content: '';
//   display: block;
//   width: 80%;
//   height: 1em;
//   background: rgba(0,0,0,.85);
//   border-radius: 50%;
//   position: absolute;
//   bottom:-10px;
//   -webkit-filter: blur(5px);
//   filter: blur(5px);
//   z-index:-5;
//   img {

//   }
// }

// .shelf {
// 	border-bottom: 30px solid #a5a5a5;
//   border-left: 20px solid transparent;
//   border-right: 20px solid transparent;
// 	top: -15px;
// 	z-index: -10;
// }
// /*Example adding pseudo element to give shelf depth*/
// .shelf:after {
// 	content: '';
// 	background: #686868;
// 	height: 20px;
// 	width: calc(100% + 40px); /*IE9+*/
// 	position: absolute;
// 	top: 30px;
// 	left: 0;
// 	right: 0;
// 	z-index: 1;
// 	margin: 0 -20px;
// }

// 
// @import url('https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css');
// 
// @import '@material/ripple/mdc-ripple';
// @import '@material/elevation/mdc-elevation';
// @import '@material/list/mdc-list';
// @import '@material/theme/mdc-theme';

// @media (min-width: 600px) {
//   .demo-toolbar {
//     height: 64px;
//   }
// }

// .demo-body {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }

// .demo-menu {
//   background: none;
//   border: none;
//   width: 24px;
//   height: 24px;
//   padding: 0;
//   margin: 0;
//   color: #FFF;
//   box-sizing: border-box;
// }
// .demo-surface {
//   @include mdc-elevation(2);
//   width: 150px;
//   height: 150px;
// }
// main {
//   padding: 12px;
// }
// section.example {
//   margin: 24px;
//   padding: 24px;
// }
</style>
