<template>
  <div class="mdc-typography demo-body">
    oh oh ahi hi hi {{user.email}}
    <a href="/">Quay về thôi</a>
    <button @click="logout">Out</button>
  </div>
</template>

<script>
// import MdlButton from '@/component/common/mdc/Button.vue'
// import Ripple from '@/component/common/mdc/Ripple.js'
// import Snackbar from '@/component/common/mdc/Snackbar.vue'
// import FormField from '@/component/common/mdc/FormField.vue'
// import Checkbox from '@/component/common/mdc/Checkbox.vue'
// import CheckboxLabel from '@/component/common/mdc/CheckboxLabel.vue'
// import IconToggle from '@/component/common/mdc/IconToggle.vue'
// import TemporaryDrawer from '@/component/common/mdc/TemporaryDrawer.vue'
// import Slider from '@/component/common/mdc/Slider.vue'
//
import firebase from 'firebase'

export default {
  name: 'hello',
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
      sliderDisabled: false
    }
  },
  computed: {
    user: () =>
      firebase.auth().currentUser
  },
  // components: { MdlButton, Snackbar, FormField, Checkbox, CheckboxLabel, IconToggle, TemporaryDrawer, Slider },
  // directives: { Ripple },
  watch: {
    checked () {
      this.changeCount++
    }
  },
  methods: {
    showSnackbar () {
      this.$root.$emit('mailSent', {
        message: 'mail sent',
        actionText: 'Undo',
        actionHandler: () => console.log('Undo it')
      })
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
