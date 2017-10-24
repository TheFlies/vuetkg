<template lang='pug'>
.section#cta
  .container.text-center
    h2 Thích thì đăng ký chơi
    p Mà được hay không thì do hên xui nhe :D.
    .row.center
        form
          .row
            .col-md-8
              input.form-control(type="email" name="email" id="email" placeholder="I Meo")  
            .col-md-4
              input.form-control(type="submit" value="Chơi luôn" class="fit")
</template>

<script>
export default {
  name: 'tkg-cta'
}
</script>

<style>
/* #cta {
	background: #e89980;
	color: #f9e5df;
	padding: 3.5em 0 4em 0;
	text-align: center;
}

#cta form {
	margin: 0 auto;
	max-width: 100%;
	width: 25em;
}

p {
	margin: 0 0 2em 0;
} */

</style>
