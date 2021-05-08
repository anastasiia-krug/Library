<template>
  <div>
    <FirstScreen />
    <Books />
  </div>
</template>

<script>
import FirstScreen from '@/components/home/FirstScreen.vue'
import Books from '@/components/home/Books.vue'

export default {
  components: {
    FirstScreen,
    Books
  }
}
</script>

<style>
</style>
