<template lang="pug">
.section.card
  slot
  span(v-if="spanImgClass", :class="spanImgClass"): img(:src="getImgUrl(spanImgSrc)",:alt="spanImgAlt || ''")
</template>

<script>
export default {
  name: 'special-box',
  props: ['spanImgClass', 'spanImgSrc', 'spanImgAlt'],
  data: function () {
    return {
    }
  },
  methods: {
    getImgUrl(pic) {
      return require(`@/assets/img/${pic}`)
    }
  }
}
</script>
