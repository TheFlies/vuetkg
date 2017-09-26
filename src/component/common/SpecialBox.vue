<template>
    <section>
        <slot></slot>
        <span v-if="spanImgClass" v-bind:class="spanImgClass">
            <img v-bind:src="spanImgSrc" v-bind:alt="spanImgAlt || ''" />
        </span>
    </section>
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
