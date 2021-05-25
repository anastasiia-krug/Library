<template>
  <div class="logo">
    <nuxt-link to="/">
      <img class="logo-svg" src="../../assets/svg/logo.svg" alt="logo" height="23px" width="23px">
      <h3 class="logo-h3 h3">BOOKS | Academy</h3>
    </nuxt-link>
  </div>
</template>

<style>
.logo {
  display: flex;
  align-items: center;
  height: 2.0625rem;
}

.logo >a{
  display: flex;
  text-decoration: none;
  color: #EEEEEE;
}

.logo-svg {
  width: 1.4375rem;
  height: 1.4375rem;
  margin-right: 0.625rem;
}
</style>