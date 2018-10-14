<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    -webkit-transition: opacity .5s
    -moz-transition: opacity .5s
    -ms-transition: opacity .5s
    -o-transition: opacity .5s
    transition: opacity .5s
</style>
