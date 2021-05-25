<template>
  <div>
    <h2 class="all-books_h2 h2">Все книги</h2>
    <div class="all-books_menu">
      <button class="all-books_menu-button h4">Жанр</button>
      <button class="all-books_menu-button h4">Автор</button>
      <button class="all-books_menu-button h4">Дата</button>
      <button class="all-books_menu-button h4">Популярное</button>
      <button class="all-books_menu-button h4">Новинки</button>
      <button class="all-books_menu-button h4">Избранное</button>
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
.all-books_h2 {
  width: 100%;
  margin-bottom: 0.375rem;
  text-align: center;
  color: #212121;
}

.all-books_menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.all-books_menu-button {
  margin-right: 2rem;
  background: #FFFFFF;
  color: #212121;
  outline: none;
  border: none;
  cursor: pointer;
}

.all-books_cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>