<template lang="pug">
header.alt(id='header')
	h6
		a(href='/') TKG
		|
		| by The Flies
	nav#nav: ul
		li: a(href='/') gác
		li
			a.icon.fa-angle-down(href='#') xem
			ul
				li: a(href='/manga') hình
				li: a(href='/book') chữ
		li
			a.icon.fa-angle-down(href='#') dịch
			ul
				li: a(href='/manga-tl') hình
				li: a(href='/book-tl') chữ
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
#header h6 {
	color: inherit;
	height: inherit;
	left: 1.25em;
	line-height: inherit;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 0;
}
#header h6 a {
	color: #fff;
	font-weight: 400;
	border: 0;
}
</style>

