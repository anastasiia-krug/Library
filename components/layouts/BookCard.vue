<template>
  <div class="book-card">
    <div class="book-card_left">
      <img class="book-card_img" :src="book.image"
           alt="Harry Potter and the philosopher's stone">
      <button class="book-card_button button span not-active" v-if="!$auth.loggedIn">Взять</button>
      <button class="book-card_button button span" v-else-if="$auth.loggedIn && !book.user" v-on:click="getBook()">Взять</button>
      <button class="book-card_button button span active" v-else-if="$auth.loggedIn && book.user" v-on:click="returnBook()">Вернуть</button>
    </div>
    <div class="book-card_right">
      <div class="book-card_right-top">
        <h3 class="book-card_h3 h3-bold">{{ book.title }}</h3>
        <p class="book-card_p p">{{book.preview}}</p>
        <p class="book-card_caption">{{book.author}}</p>
      </div>
      <div class="book-card_right-bottom">
        <div class="book-card_genre h4">{{book.category.title}}</div>
<!--        <div class="book-card_price h4-bold">620 ₴</div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    book: {},
    current_page: {}
  },
  methods:{
    async getBook(){
      try {
        await this.$store.dispatch('getBooks', {
          count: 8,
          page: this.current_page,
          getBook: this.book.id
        })
      } catch (e) {}
    },
    async returnBook(){
      try {
        await this.$store.dispatch('getBooks', {
          count: 8,
          page: this.current_page,
          returnBook: this.book.id
        })
      } catch (e) {}
    }
  }
}
</script>

<style>
.book-card {
  position: relative;
  overflow: hidden;
  display: flex;
  width: 27rem;
  height: 18.125rem;
  margin: 1rem;
  border-radius: 0.25rem;
  background: #FFFFFF;
  box-shadow: 0.25rem 0.25rem 1rem rgba(33, 33, 33, 0.15);
}

.book-card_left {
  width: 11rem;
  height: 100%;
}

.book-card_img {
  position: relative;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.book-card_button {
  position: relative;
  bottom: 2.75rem;
  z-index: 3;
  width: 11rem;
  height: 2.5rem;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.book-card_right {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.book-card_right-top {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 16rem;
  padding: 1rem 1rem 0 1.5rem;
}

.book-card_h3 {
  width: 100%;
  margin-bottom: 0.5rem;
  color: #212121;
}

.book-card_p {
  width: 100%;
  margin-bottom: 0.3125rem;
  white-space: pre-line;
  color: #212121;
}

.book-card_caption {
  width: 100%;
  margin-bottom: 0.25rem;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 0.625rem;
  line-height: 0.875rem;
  text-align: right;
  color: #A9A9A9;

  position: absolute;
  bottom: 2.75rem;
  right: 1rem;
}

.book-card_right-bottom {
  position: absolute;
  bottom:0;
  display: flex;
  width: 16rem;
  border-top: 0.0625rem solid #F2F2F2;
  padding: 0.625rem 0 0.625rem;
}

.book-card_genre {
  /*width: 75%;*/
  width: 100%;
  /*border-right: 0.0625rem solid #F2F2F2;*/
  color: #4F4F4F;
  text-align: center;
}

.book-card_price {
  width: 25%;
  color: #212121;
  text-align: center;
}
</style>
