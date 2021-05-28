<template>
  <div>
    <Books class="all-books" />
  </div>
</template>

<script>
import Books from '@/components/Books';

export default {
  components: {
    Books
  },
}
</script>

<style>
.all-books {
  margin-top: 6rem;
  margin-bottom: 1rem;
  min-height: calc(100vh - 20.9rem);
}
</style>
