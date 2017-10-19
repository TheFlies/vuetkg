<template lang="pug">
#manga
  tkg-manga-header
  .wrapper
    .container
      .row
        template(v-for="(book, idx) in mangas")
          .col-12.shelf.hidden-md.hidden-lg(v-if="idx%3==0&&idx%6!=0")
          .col-12.shelf(v-if="idx/6!=0&&idx%6==0")
          .col-xs-4.col-md-2
              //- .book-wrapper
              img(:src="book.cover.url")
              .card
                span.label.bg-primary {{book.title}}
                a.mr-auto.ml-auto.book-link(href='#')
                p hello this is a very long paragraph. hello this is a very long paragraph. hello this is a very long paragraph.
        .col-12.shelf(v-if="books.length>0")          
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
import db from '../../firebase.js'
let mangasRef = db.ref('mangas')

import TkgMangaHeader from '@/component/common/MangaHeader'
import TkgFooter from '@/component/common/Footer'

export default {
  name: 'tkg-manga',
  components: {TkgMangaHeader, TkgFooter},
  firebase: {
    mangas: mangasRef
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
        {
          'title': 'Harry Potter',
          'color': 'green',
          'cover': {
            'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=Harry+Potter&w=300&h=500',
            'width': 300,
            'height': 500
          }
        },
        {
          'title': 'Hai vạn dặm dưới đáy biển',
          'color': 'green',
          'cover': {
            'url': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=hai+van+dam+duoi+day+bien&w=300&h=500',
            'width': 300,
            'height': 500
          }
        }
      ]
    }
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .card {
//   margin-bottom: 0px;
// }

// // variables
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
// 	background: url('https://static.tumblr.com/8x9m588/C8ho55ylx/bg-wood2.png'), linear-gradient($grad1,$grad2 290px,$grad3 290px,$grad3 292px,$darktan 292px,$darktan 298px,$grad5 298px,$grad5 300px);	
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
//     .info, .card {
//       background: none;
//       width: auto;
//       height: auto;
//       position: absolute;
//       bottom: 0;
//       left: 50%;
//       transform: translateX(-50%);
//       max-width: 100%;
//       max-height: 100%;
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
