<template lang="pug">
b-container#manga
  b-row
    b-col.bookshelf.text-center(md="12" style="padding-top: 32px")
      .book-holder
        .book-container
          .book(v-for='book in books')
            .book-cover
              .cover
                span.book-title(style="margin-left: 5px") {{book.name}}
                span.book-writer {{book.author}}
            .book-spine
              h1 testing
</template>

<script>
import fb from '@/modules/fbase.js'
let booksRef = fb.db.ref('books')
export default {
  name: 'tkg-book',
  firebase: {
    books: booksRef
  }
}
</script>

<style lang="scss" scoped>
.heading{
  color:#fff;
  text-shadow: 1px 0px 5px #000;
  padding-top:5%;
  margin-bottom:5%;
}
.bookshelf{
  background: #ccc;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  margin-top:10px;
  padding-bottom:20px;
}
.book-holder {
  width: 160px;
  display:inline-block;
  margin-left:5%;
}
.book-container {
  -webkit-perspective: 1300px;
  -moz-perspective: 1300px;
  perspective: 1300px;
  -webkit-transition: 0.75s;
  -o-transition: 0.75s;
  -ms-transition: 0.75s;
  -moz-transition: 0.75s;
  transition: 0.75s;
}
.book {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  -webkit-transition: 0.75s;
  -o-transition: 0.75s;
  -ms-transition: 0.75s;
  -moz-transition: 0.75s;
  transition: 0.75s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 125px 0;
  -moz-transform-origin: 125px 0;
  -o-transform-origin: 125px 0;
  -ms-transform-origin: 125px 0;
  transform-origin: 125px 0;
  border-radius: 0 10px 10px 0;
}
.book:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 3px;
  width: 7px;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
  transform: translateZ(1px);
  -webkit-transform: translateZ(1px);
  -moz-transform: translateZ(1px);
  -o-transform: translateZ(1px);
  -ms-transform: translateZ(1px);
}
.book:hover {
  -webkit-transform: translateX(-10px) translateZ(40px) translateX(40px) rotateY(50deg);
  -moz-transform: translateX(-10px) translateZ(40px) translateX(40px) rotateY(50deg);
  -o-transform: translateX(-10px) translateZ(40px) translateX(40px) rotateY(50deg);
  -ms-transform: translateX(-10px) translateZ(40px) translateX(40px) rotateY(50deg);
  transform: translateX(-10px) translateZ(40px) translateX(40px) rotateY(50deg);
}
.book-cover {
  position: relative;
  z-index: 10;
}
.book-cover .cover {
  vertical-align: bottom;
  width: 160px;
  height: 190px;
  background-color: #FFC107;
  background: #FFC107;
  background: -moz-linear-gradient(top, #FF5722 0%, #FF9800 45%, #FFEB3B 100%);
  background: -webkit-linear-gradient(top, #FF5722 0%, #FF9800 45%, #FFEB3B 100%);
  background: linear-gradient(to bottom, #FF5722 0%, #FF9800 45%, #FFEB3B 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FF5722', endColorstr='#FFEB3B', GradientType=0);
  /* padding-left: 0px; */
  padding-top: 20px;
  font-size: 22px;
  position: relative;
  border-radius: 0 10px 10px 0;
}
.cover:after {
  content: "";
  position: absolute;
  height: 100px;
  width: 100px;
  /*background: url('../../admin/uploads/logo.png') no-repeat;*/
  background-size: 100px;
  z-index: 9999;
  left: 50px;
  top: 30px;
}
.book-title{
  color:#fff;
  text-shadow: 1px 0px 5px #000;
}
.book-writer{
  color:#fff;
  text-shadow: 1px 0px 5px #000;
  display:block;
  font-size:12px;
  text-align:right;
  padding-right:10px;
  margin-top:20%;
}
.book-spine {
  position: absolute;
  color: #fff;
  bottom: 0;
  top: 0;
  width: 50px;
  z-index: 5;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: #a3380e;
  background-size: auto 100%;
  -webkit-transform: rotateY(-90deg) translateX(-49px);
  -moz-transform: rotateY(-90deg) translateX(-49px);
  -o-transform: rotateY(-90deg) translateX(-49px);
  -ms-transform: rotateY(-90deg) translateX(-49px);
  transform: rotateY(-90deg) translateX(-49px);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
.book-spine h1 {
  display: block;
  width: 300px;
  text-align: center;
  color: #fff;
  position: absolute;
  top: -55px;
  left: 34px;
  text-indent: -40px;
  text-transform: uppercase;
  font-family: monospace;
  font-size: 18px;
  opacity: 0.7;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-transform: rotateZ(90deg);
  -moz-transform: rotateZ(90deg);
  -o-transform: rotateZ(90deg);
  -ms-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
.book-spine:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
</style>
