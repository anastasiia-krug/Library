<template>
  <div v-bind:class="{'blurring-scroll':dialog && dialog.length>0 && !$auth.loggedIn}">
    <Header v-bind:class="{'header-secondary':$route.name!=='index'||scrollTop>100}"/>
      <div v-on:click="noDialog">
        <Nuxt v-bind:class="{'background-blurring':dialog && dialog.length>0 && !$auth.loggedIn}"/>
      </div>
    <Footer v-if="$route.name!=='auth-SignIn' && $route.name!=='auth-SignUp'"/>
    <SignIn v-if="dialog&&dialog === 'SignIn' && !$auth.loggedIn"/>
    <SignUp v-if="dialog&&dialog === 'SignUp' && !$auth.loggedIn"/>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';

export default {
  components: {
    Header,
    Footer,
    SignIn,
    SignUp
  },
  data(){
    return {
      scrollTop: 0,
    }
  },
  computed: {
    dialog() {
      return this.$store.getters.dialog
    }
  },
  methods: {
    async noDialog() {
      try {
        await this.$store.dispatch('getDialog', {
          dialog: '',
        })
      } catch (e) {
      }
    },
    handleScroll () {
      this.scrollTop = window.scrollY;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.h1-bold {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 112%;
}

.h2 {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
}

.h2-bold {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
}

.h3 {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5625rem;
}

.h3-bold {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
}

.h4 {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
}

.h4-bold {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.375rem;
}

.p {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.1875rem;
}

.p-bold {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.1875rem;
}

.span {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
}

.button {
  border-radius: 0.25rem;
  background: #4DB6AC;
  color: #FFFFFF;
  outline: none;
  border: none;
  cursor: pointer;
}

.wrapper {
  margin: 0 6rem 0 6rem;
}

.header-secondary {
  height: 4rem;
  background: #0B6880;
}

.background-blurring {
  filter: blur(4rem);
  height: 100%;
  background: rgba(33, 33, 33, 0.22);
}

.blurring-scroll {
  overflow: hidden;
  height: 100vh;
}

.not-active {
  background: rgb(110 224 213);
}

.active {
  background: #267b73;
}
</style>
