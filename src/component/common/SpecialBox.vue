<template lang="pug">
.section.card
  slot
  span(v-if="spanImgClass", :class="spanImgClass")
    img(:src="spanImgSrc",:alt="spanImgAlt || ''")
</template>

<script>
export default {
  name: 'special-box',
  props: ['spanImgClass', 'spanImgSrc', 'spanImgAlt'],
  data: function () {
    return {
    }
  }
}
</script>

<style>
/* .section.card p {
	margin: 0 0 2em 0;
}

.section.card .actions {
    cursor: default;
    list-style: none;
    padding-left: 0;
}

.section.card > :last-child {
  margin-bottom: 0;
} */
</style>

