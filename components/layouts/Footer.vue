<template>
  <section class="footer">
    <div class="footer_main">
      <div class="footer_main-container">
        <Logo class="footer_logo" />
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
  height: 6rem;
  margin-top: 2.5rem;
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