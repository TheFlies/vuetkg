<template lang="pug">
header.alt(id='header')
	h1
		a(href='/') TKG
		|
		| by The Flies
	nav#nav: ul
		li: a(href='/') gác
		li
			a.icon(class='fa-angle-down' href='#') dịch
			ul
				li: a(href='/manga-tl') hình
				li: a(href='/book-tl') chữ
		li
			a.icon(class='fa-angle-down' href='#') xem
			ul
				li: a(href='/manga') hình
				li: a(href='/book') chữ
		li
			a(href='/login') đăng nhập
			| hay
			a.button(href='/register') đăng ký
</template>

<script>
export default {
  name: 'tkg-header'
}
</script>

<style lang="scss">
</style>

