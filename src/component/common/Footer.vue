<template lang='pug'>
footer#footer
  ul.icons
    li: a.fa.fa-twitter(href='#')
      span.label Twitter
    li: a.fa.fa-facebook(href='#')
      span.label Facebook      
    li: a.fa.fa-instagram(href='#')
      span.label Instagram 
    li: a.fa.fa-github(href='https://github.com/gaconkzk')
      span.label Github
    li: a.fa.fa-dribbble(href='#')
      span.label Dribbble
    li: a.fa.fa-google-plus(href='#')
      span.label Google+
  ul.copyright
    li &copy;2017 by The Flies
    li Design: 
      a(href='http://html5up.net') HTML5 UP
    li Framework:
      a(href='https://www.creative-tim.com/product/paper-kit-2') Creative Tim
</template>

<script>
export default {
  name: 'tkg-footer'
}
</script>

<style scoped>
/* ol {
	list-style: decimal;
	margin: 0 0 2em 0;
	padding-left: 1.25em;
}

ol li {
	padding-left: 0.25em;
}

ul {
	list-style: disc;
	margin: 0 0 2em 0;
	padding-left: 1em;
}
  
ul li {
	padding-left: 0.5em;
}

ul.icons {
	cursor: default;
	list-style: none;
	padding-left: 0;
}

ul.icons li {
	display: inline-block;
	padding: 0 1.25em 0 0;
}

ul.icons li:last-child {
	padding-right: 0;
}

ul.icons li .fa {
	color: inherit;
}

ul.icons li .fa:before {
	font-size: 1.75em;
}

.fa {
	text-decoration: none;
	border-bottom: none;
	position: relative;
}

.fa > .label {
	display: none;
}
  
#footer {
	background: #f0f0f0;
	padding: 4em 0 6em 0;
	text-align: center;
}

#footer .icons a {
	-moz-transition: opacity 0.2s ease-in-out;
	-webkit-transition: opacity 0.2s ease-in-out;
	-ms-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
	opacity: 0.35;
}

#footer .icons a:hover {
	opacity: 0.75;
}

#footer .copyright {
	color: #999;
	font-size: 0.9em;
	line-height: 1em;
	margin: 2em 0 0 0;
	padding: 0;
	text-align: center;
}

#footer .copyright a {
	color: inherit;
}

#footer .copyright li {
	border-left: solid 1px #dddddd;
	display: inline-block;
	list-style: none;
	margin-left: 1em;
	padding-left: 1em;
}

#footer .copyright li:first-child {
	border-left: 0;
	margin-left: 0;
	padding-left: 0;
} */

</style>