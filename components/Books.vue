<template>
  <div>
    <h2 class="all-books_h2 h2">Книги</h2>
    <div class="all-books_menu">
      <button class="books_menu-link h4-bold">Жанр</button>
      <button class="books_menu-link h4">Автор</button>
      <button class="books_menu-link h4">Дата</button>
      <button class="books_menu-link h4">Популярное</button>
      <button class="books_menu-link h4">Новинки</button>
      <button class="books_menu-link h4">Избранное</button>
    </div>
    <div class="wrapper">
      <div class="all-books_cards-container">
        <BookCard v-for="(book,book_key) in books"/>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from '@/components/layouts/BookCard.vue'

export default {
  components: {
    BookCard
  },

  data() {
    return {
      books: [
        {}, {}, {}, {}, {}, {}, {}, {},
      ],
    }
  }
}
</script>

<style>
.all-books_cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>