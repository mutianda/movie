<template>
  <div>
    <publish-header></publish-header>
    <publish-content></publish-content>
    <publish-updes></publish-updes>
  </div>
</template>

<script>
import PublishHeader from './components/Header'
import PublishContent from './components/Content'
import PublishUpdes from './components/Updes'
export default {
  name: 'Publish',
  components: {
    PublishHeader,
    PublishContent,
    PublishUpdes
  }
}
</script>

<style scoped>

</style>
