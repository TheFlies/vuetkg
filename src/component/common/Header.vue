<template lang="pug">
header#header.alt
  h1
    a(href='/') TKG
    |
    | by The Flies
  nav#nav: ul
    li: a(href='/') gác
    li
      a.html5up-icon.fa-angle-down(href='#') xem sách
      ul
        li: a(href='/manga') hình
        li: a(href='/book') chữ
    li
      a.html5up-icon.fa-angle-down(href='#') ăn chơi
      ul
        li: a(href='/drinking') ăn nhậu
        li: a(href='/games') chơi bời
        li: a(href='/girls') gái gú
    li
      a(href='/login') đăng nhập
      | hay
      a.html5up-button(href='/register') đăng ký
</template>

<script>
export default {
  name: 'tkg-header'
}
</script>

<style lang="scss" scoped>
// #header h1 {
//   color: inherit;
//   height: inherit;
//   left: 1.25em;
//   line-height: inherit;
//   margin: 0;
//   padding: 0;
//   position: absolute;
//   top: 0;
// }

// #header h1 a {
//   color: #fff;
//   font-weight: 400;
//   border: 0;
// }

// #header a {
//   border-bottom: none;
//   color: #fff;
//   font-weight: 400;
//   border: 0;
// }

// #header .sub a {
//   color: #000;
// }
</style>

