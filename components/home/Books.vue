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
              <div class="card">
                <div class="card_left">
                  <img class="card_img" src="../../assets/img/harry_potter_and_the_philosophers_stone.png"
                       alt="Harry Potter and the philosopher's stone">
                  <button class="card_button button span">Подробнее...</button>
                </div>
                <div class="card_right">
                  <div class="card_right-top">
                    <h3 class="card_h3 h3-bold">Гарри Поттер и философский камень</h3>
                    <p class="card_p p">Одиннадцатилетний мальчик-сирота живет в семье тетки и даже не подозревает, что он — волшебник...

                      И однажды, ему приходит письмо, изменив его жизнь навсегда...</p>
                    <p class="card_caption">Джоан Роулинг</p>
                  </div>
                  <div class="card_right-bottom">
                    <div class="card_genre h4">Фэнтези</div>
                    <div class="card_price h4-bold">620 ₴</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="books_button-container">
          <button class="books_slider-button">
            <img class="books_slider-svg" src="../../assets/svg/arrow-right.svg" alt="right arrow" width="2rem" height="4rem">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.books {
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
}

.books_main {
  display: flex;
  flex-wrap: wrap;
}

.books_h2 {
  width: 100%;
  margin-top: 2rem;
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

.card {
  display: flex;
  width: 27rem;
  height: 18.125rem;
  margin: 1rem;
  border-radius: 0.25rem;
  background: #FFFFFF;
  box-shadow: 0.25rem 0.25rem 1rem rgba(33, 33, 33, 0.15);
}

.card_left {
  width: 11rem;
  height: 100%;
}

.card_img {
  position: relative;
  top: 0;
  z-index: 2;
  width: 100%;
}

.card_button {
  position: relative;
  bottom: 2.75rem;
  z-index: 3;
  width: 11rem;
  height: 2.5rem;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.card_right {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.card_right-top {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 16rem;
  padding: 1rem 1rem 0 1.5rem;
}

.card_h3 {
  width: 100%;
  margin-bottom: 0.5rem;
  color: #212121;
}

.card_p {
  width: 100%;
  margin-bottom: 0.3125rem;
  white-space: pre-line;
  color: #212121;
}

.card_caption {
  width: 100%;
  margin-bottom: 0.25rem;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 0.625rem;
  line-height: 0.875rem;
  text-align: right;
  color: #A9A9A9;
}

.card_right-bottom {
  display: flex;
  width: 16rem;
  border-top: 0.0625rem solid #F2F2F2;
  padding: 0.625rem 0 0.625rem;
}

.card_genre {
  width: 75%;
  border-right: 0.0625rem solid #F2F2F2;
  color: #4F4F4F;
  text-align: center;
}

.card_price {
  width: 25%;
  color: #212121;
  text-align: center;
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

.books_slider-svg {
  width: 2rem;
  height: 4rem;
}
</style>