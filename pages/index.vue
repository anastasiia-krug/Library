<template>
  <div>
    <FirstScreen/>
    <Books/>
    <!--    <Authors />-->
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
  async mounted() {
    try {
      await this.$store.dispatch('getBooks', {
        count: 8,
        page: 1,
      })
    } catch (e) {}
  }
}
</script>

<style>
</style>
