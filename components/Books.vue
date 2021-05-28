<template>
  <div v-if="books">
    <h2 class="all-books_h2 h2">Все книги</h2>
    <!--    <div class="all-books_menu">-->
    <!--      <button class="all-books_menu-button h4">Жанр</button>-->
    <!--      <button class="all-books_menu-button h4">Автор</button>-->
    <!--      <button class="all-books_menu-button h4">Дата</button>-->
    <!--      <button class="all-books_menu-button h4">Популярное</button>-->
    <!--      <button class="all-books_menu-button h4">Новинки</button>-->
    <!--      <button class="all-books_menu-button h4">Избранное</button>-->
    <!--    </div>-->
    <div class="wrapper">
      <div class="all-books_cards-container">
        <BookCard v-for="(book,book_key) in books.data" :book="book" :current_page="books.current_page"/>
      </div>
    </div>

    <div class="pagination">
      <button class="button pagination_button p" v-bind:class="{'not-active':1>=books.current_page}"
              v-on:click="1<books.current_page?prev():null">
        Prev
      </button>
      <button class="button pagination_button p active">
        {{ books.current_page }}
      </button>
      <button class="button pagination_button p" v-bind:class="{'not-active':books.last_page<=books.current_page}"
              v-on:click="books.last_page>books.current_page?next():null">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import BookCard from '@/components/layouts/BookCard.vue'

export default {
  components: {
    BookCard
  },

  computed: {
    books() {
      return this.$store.getters.books;
    }
  },
  methods: {
    async next() {
      try {
        await this.$store.dispatch('getBooks', {
          count: 8,
          page: this.books.current_page + 1,
        })
      } catch (e) {}
    },
    async prev() {
      try {
        await this.$store.dispatch('getBooks', {
          count: 8,
          page: this.books.current_page - 1,
        })
      } catch (e) {}
    }
  },

  async mounted() {
    try {
      await this.$store.dispatch('getBooks', {
        count: 8,
        page: 1,
      })
    } catch (e) {
    }
  }
}
</script>

<style>
.all-books_h2 {
  width: 100%;
  margin-bottom: 1rem;
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

.pagination {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1rem 0 2rem;
}

.pagination_button {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
}
</style>
