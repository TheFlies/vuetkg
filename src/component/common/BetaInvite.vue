<template lang='pug'>
.section#cta
  .container.text-center
    h2 Thích thì đăng ký chơi
    p Mà được hay không thì do hên xui nhe :D.
    .row.center
        b-form
          b-form-row
            .col-md-8
              b-form-input.form-control(type="email", name="email", id="email", placeholder="I Meo", v-model='email', required,
                :state='mailState'
                aria-describedby="input-feeback"
              )
              b-form-feedback#feedback có imeo <b>đúng</b> mới đăng ký được nha.
            .col-md-4
              b-button.bg-white.form-control(type="button", class="fit", variant='light', @click.prevent='register') Chơi luôn
</template>

<script>
export default {
  name: 'tkg-cta',
  data() {
    return {
      email: null
    }
  },
  computed: {
    mailState() {
      if (!this.email) return null
      var re = /\S+@\S+\.\S+/
      return re.test(this.email)
    }
  },
  methods: {
    register() {
      if (this.email && this.email.trim()) {
        this.$router.push(`/register?email=${this.email}`)
      } else {
        this.email = ' '
      }
    }
  }
}
</script>

<style>
#cta {
	background: #e89980;
	color: #f9e5df;
  padding: 3.5em 0 4em 0;
  margin-top: 1em;
	text-align: center;
}

#cta form {
	margin: 0 auto;
	max-width: 100%;
	width: 25em;
}

p {
	margin: 0 0 2em 0;
}

#feedback {
  color: white;
}

</style>
