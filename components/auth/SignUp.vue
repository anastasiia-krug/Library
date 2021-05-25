<template>
  <div class="sign-up">
    <h2 class="sign-up_h2 h2-bold">Регистрация</h2>
    <ui_input icon="lock"/>
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
</style>