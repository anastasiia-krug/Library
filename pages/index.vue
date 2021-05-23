<template>
  <div>
    <FirstScreen />
    <Books />
    <Authors />
  </div>
</template>

<script>
import FirstScreen from '@/components/home/FirstScreen.vue';
import Books from '@/components/home/Books.vue';
import Authors from '@/components/home/Authors.vue';

export default {
  components: {
    FirstScreen,
    Books,
    Authors
  },
}
</script>

<style>
</style>