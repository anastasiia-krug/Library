<template>
  <section class="header">
    <div class="header_left">
      <Logo />
      <div class="header_search">
        <input class="header_search-input" type="search" placeholder="Поиск">
        <button class="header_search-button">
          <img src="../../assets/svg/search.svg" alt="search" height="17px" width="17px">
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

<style>
.header {
  z-index: 9999;
  display: flex;
  width: 100%;
  height: 4.9375rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.header_left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(50% + 8.125rem);
}

.header_search {
  display: flex;
  align-items: center;
  height: 1.1875rem;
  margin-right: 2.5rem;
}

.header_search-input {
  height: 1.1875rem;
  margin-right: 1rem;
  color: #FFFFFF;
  background: none;
  outline: none;
  border: none;
  text-align: right;
}

::placeholder {
  color: #EEEEEE;
  text-align: right;
}

.header_search-button {
  width: 1.0625rem;
  height: 1.0625rem;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}

.header_right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(50% - 8.625rem);
}

.header_nav {
  display: flex;
}

.header_nav-link {
  padding: 0 0.25rem 0.4375rem 0.25rem;
  margin-left: 3.5rem;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.1875rem;
  text-decoration: none;
  color: #FFFFFF;
}

.header_nav-link:hover {
  border-bottom: 0.0625rem solid #FFFFFF;
}
</style>

<script>
import Logo from '@/components/layouts/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>