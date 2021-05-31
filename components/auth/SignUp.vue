<template>
  <div class="sign-up">
    <h2 class="sign-up_h2 h2-bold">Регистрация</h2>
    <ui_input icon="name" input_placeholder="E-mail" v-model="form.email" class="sign-up_input" type="email"/>
    <ui_input icon="door-key" input_placeholder="Пароль" v-model="form.password" class="sign-up_input" type="password"/>
    <ui_input icon="lock" input_placeholder="Повторите пароль" v-model="form.passwordRepeat" class="sign-up_input" type="password"/>
    <ui_input icon="tickets-couple" input_placeholder="Читательский билет" v-model="form.library_card" class="sign-up_input" type="text"/>
    <button class="sign-up_button button p" v-on:click="signUp()">Зарегистрироваться</button>
  </div>
</template>

<script>
import ui_input from '@/components/ui/input.vue';

export default {
  components: {
    ui_input
  },
  data(){
    return {
      form:{
        email:'',
        password: '',
        passwordRepeat: '',
        library_card: '',
      }
    }
  },
  methods:{
    async signUp() {
      try {
        await this.$axios.$get('sanctum/csrf-cookie')
        if(this.form.password && this.form.passwordRepeat && this.form.password === this.form.passwordRepeat) {
          const responce = await this.$axios.$post('/register', this.form)
          if (!responce.errors) {
            await this.$auth.fetchUser()
          }
        }
      } catch (e) {
      }
    },
    submit(){
      return false;
    }
  }
}
</script>

<style>
.sign-up {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 2.375rem 2rem 2.375rem 2rem;
  border-radius: 0.625rem;
  background: rgba(33, 33, 33, 0.5);
}

.sign-up_h2 {
  width: 100%;
  margin-bottom: 2.375rem;
  text-align: center;
  color: #FFFFFF;
}

.sign-up_input {
  margin-bottom: 2rem;
}

.sign-up_button {
  width: 19.5rem;
  height: 2.5rem;
}
</style>
