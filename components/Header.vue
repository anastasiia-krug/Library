<template>
  <section class="header">
    <div class="header_left">
      <div class="header_logo">
        <nuxt-link to="/">
          <img class="header_logo-svg" src="../assets/svg/logo.svg" alt="logo" height="23px" width="23px">
          <h3 class="header_logo-h3 h3">BOOKS | Academy</h3>
        </nuxt-link>
      </div>
      <div class="header_search">
        <input class="header_search-input" placeholder="Поиск">
        <button class="header_search-button">
          <img src="../assets/svg/search.svg" alt="search" height="17px" width="17px">
        </button>
      </div>
    </div>
    <div class="header_right ">
      <div class="header_nav">
        <nuxt-link class="header_nav-link" to="/">Главная</nuxt-link>
        <nuxt-link class="header_nav-link" to="">Все книги</nuxt-link>
        <nuxt-link class="header_nav-link" to="">Кабинет</nuxt-link>
      </div>
    </div>
  </section>
</template>