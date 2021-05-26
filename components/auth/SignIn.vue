<template>
  <div class="sign-in">
    <h2 class="sign-in_h2 h1-bold">Авторизация</h2>
    <ui_input icon="name" input_placeholder="Имя" class="sign-in_input" />
    <ui_input icon="door-key" input_placeholder="Пароль" class="sign-in_input" />
    <button class="sign-in_button button p">Войти</button>
  </div>
</template>

<script>
import ui_input from '@/components/ui/input.vue';

export default {
  components: {
    ui_input
  }
}
</script>

<style>
.sign-in {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 2.375rem 2rem 2.375rem 2rem;
  border-radius: 0.625rem;
  background: rgba(33, 33, 33, 0.5);
}

.sign-in_h2 {
  width: 100%;
  margin-bottom: 2.375rem;
  text-align: center;
  color: #FFFFFF;
}

.sign-in_input {
  margin-bottom: 2rem;
}

.sign-in_button {
  width: 19.5rem;
  height: 2.5rem;
}
</style>