<template>
  <section class="header">
    <div class="header_left">
      <Logo class="header_logo"/>
<!--      <Search class="header_search"/>-->
    </div>
    <div class="header_right ">
      <div class="header_nav">
        <nuxt-link class="header_nav-link" to="/">Главная</nuxt-link>
        <nuxt-link class="header_nav-link" to="/all-books">Все книги</nuxt-link>
        <div class="header_nav-block" v-if="!$auth.loggedIn">
          <div class="header_nav-link" v-on:click="dialog('SignIn')">Вход</div>
          /
          <div class="header_nav-link" v-on:click="dialog('SignUp')">Регистрация</div>
        </div>
        <div class="header_nav-link" v-if="$auth.loggedIn" v-on:click="signOut()">Выход</div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '@/components/layouts/Logo.vue'
import Search from '@/components/layouts/Search.vue'

export default {
  components: {
    Logo,
    Search
  },
  methods:{
    async dialog(name){
      try {
        await this.$store.dispatch('getDialog', {
          dialog: name,
        })
      } catch(e){}
    },
    async signOut() {
      try {
        await this.$axios.$get('sanctum/csrf-cookie')
        await this.$auth.logout('local', { data: this.form })
      } catch (e) {}
    },
  }
}
</script>

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

.header_logo {
  margin-left: 2.875rem;
}

.header_search {
  margin-right: 2.5rem;
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
  padding: 0.4375rem 0.25rem 0.4375rem 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0);
  margin-left: 3.5rem;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.1875rem;
  text-decoration: none;
  color: #FFFFFF;
  cursor:pointer;
}

.header_nav-link:hover {
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 1);
}
.header_nav-block{
  display: flex;
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 2.475rem;

  margin-left: 3.5rem;
}
.header_nav-block .header_nav-link{
  margin-left: 0;
}
</style>
