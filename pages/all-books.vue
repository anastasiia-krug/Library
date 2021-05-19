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
  }
}
</script>

<style>
.all-books {
  margin-top: 4rem;
}
</style>