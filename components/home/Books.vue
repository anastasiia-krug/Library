<template>
  <section class="books">
    <div class="books_main">
      <h2 class="books_h2 h2">Книги</h2>
      <div class="books_menu">
        <nuxt-link class="books_menu-link h4-bold" to="">Все</nuxt-link>
        <nuxt-link class="books_menu-link h4" to="">Фантастика</nuxt-link>
        <nuxt-link class="books_menu-link h4" to="">Сказки</nuxt-link>
        <nuxt-link class="books_menu-link h4" to="">Фэнтези</nuxt-link>
        <nuxt-link class="books_menu-link h4" to="">Детективы</nuxt-link>
        <nuxt-link class="books_menu-link h4" to="">Ужасы</nuxt-link>
        <nuxt-link class="books_menu-link h4" to="">Приключения</nuxt-link>
      </div>
      <div class="books_width-wrapper">
        <div class="wrapper">
          <div class="books_wrapper">
            <div class="books_cards-container">
              <BookCard v-for="(book,book_key) in books"/>
            </div>
          </div>
        </div>
        <div class="books_button-container">
          <button class="books_slider-button" v-bind:class="{'books_slider-button-active':button}" v-on:click="booksScroll">
            <img class="books_slider-svg" src="../../assets/svg/arrow-right.svg" alt="right arrow" width="2rem"
                 height="4rem">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.books {
  width: 100%;
  min-height: 100vh;
  margin: 2rem 0;
  background: #FFFFFF;
}

.books_main {
  display: flex;
  flex-wrap: wrap;
}

.books_h2 {
  width: 100%;
  text-align: center;
  color: #212121;
}

.books_menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 1.25rem 0 3rem 0;
}

.books_menu-link {
  margin-right: 2rem;
  text-decoration: none;
  color: #212121;
}

.books_width-wrapper {
  position: relative;
  width: 100%;
}

.books_wrapper {
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
}

.books_cards-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 52rem;
}

.books_button-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  width: 16rem;
  height: 100%;
  background: linear-gradient(270deg, #FFFFFF 79.69%, rgba(255, 255, 255, 0.78) 100%);
}

.books_slider-button {
  width: 2rem;
  height: 4rem;
  margin-right: 6rem;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}
.books_slider-button-active{
  transform: rotate(180deg);
}

.books_slider-svg {
  width: 2rem;
  height: 4rem;
}
</style>

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
      button: false,
    }
  },

  methods: {
    booksScroll(event) {
      if (event &&
          event.srcElement &&
          event.srcElement.parentElement &&
          event.srcElement.parentElement.parentElement &&
          event.srcElement.parentElement.parentElement.parentElement &&
          event.srcElement.parentElement.parentElement.parentElement.children &&
          event.srcElement.parentElement.parentElement.parentElement.children.length > 0 &&
          event.srcElement.parentElement.parentElement.parentElement.children[0] &&
          event.srcElement.parentElement.parentElement.parentElement.children[0].children.length > 0 &&
          event.srcElement.parentElement.parentElement.parentElement.children[0].children[0]._prevClass === 'books_wrapper') {
        let scrollObj = event.srcElement.parentElement.parentElement.parentElement.children[0].children[0];
        if(scrollObj.scrollLeft === 0) {
          scrollObj.scrollTo({left: 1000, behavior: 'smooth'})
          this.button = true;
        } else {
          scrollObj.scrollTo({left: 0, behavior: 'smooth'})
          this.button = false;
        }
      }
    }
  }
}
</script>