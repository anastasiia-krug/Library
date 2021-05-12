<template>
  <section class="footer">
    <div class="footer_main">
      <div class="footer_main-container">
        <Logo class="footer_logo" />
        <div class="footer_nav">
          <div class="footer_left-nav">
            <nuxt-link class="footer_nav-link h4" to="/">Главная</nuxt-link>
            <nuxt-link class="footer_nav-link h4" to="">Все книги</nuxt-link>
            <nuxt-link class="footer_nav-link h4" to="">Избранное</nuxt-link>
          </div>
          <div class="footer_right-nav">
            <nuxt-link class="footer_nav-link h4" to="/">Политика конфиденциальности</nuxt-link>
            <nuxt-link class="footer_nav-link h4" to="">Политика приватности</nuxt-link>
            <nuxt-link class="footer_nav-link h4" to="">Пользовательское соглашение</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_copyright">
      <p class="footer_copyright-p span">© Anastasiia Krug, 2021</p>
    </div>
  </section>
</template>

<style>
.footer {
  width: 100%;
  height: 14rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.footer_main {
  width: 100%;
  height: 12rem;
  background: #4DB6AC;
}

.footer_main-container {
  display: flex;
  align-items: center;
  height: 6rem;
  margin-top: 2.5rem;
}

.footer_logo {
  margin: 0 6rem 0 2.5rem;
}

.footer_nav {
  display: flex;
  height: 100%;
}

.footer_left-nav {
  display: flex;
  flex-wrap: wrap;
  width: 7.5rem;
  height: 100%;
  padding-right: 2rem;
  border-right: 0.0625rem solid #E0F2F1;
}

.footer_right-nav {
  display: flex;
  flex-wrap: wrap;
  width: 18rem;
  height: 100%;
  padding-left: 2rem;
}

.footer_nav-link {
  margin-bottom: 0.75rem;
  color: #E0F2F1;
  text-decoration: none;
}

.footer_copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2rem;
  background: #F2F2F2;
}

.footer_copyright-p {
  color: #4F4F4F;
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