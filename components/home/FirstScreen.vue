<template>
  <section class="first-screen">
    <div class="first-screen_left">
      <div class="wrapper">
        <h1 class="first-screen_h1 h1-bold">Что такое Books Academy?</h1>
        <div class="first-screen_hr"></div>
        <p class="first-screen_text h4">Войдите в светлый мир двенадцатилетнего мальчика и проживите с ним лето, наполненное радостными и печальными, загадочными и тревожными событиями.

          Лето, когда каждый день совершаются удивительные открытия, главное из которых - ты живой, ты дышишь, ты чувствуешь!</p>
        <div class="first-screen_left-text"></div>
        <button class="first-screen_left-button button p">Читать</button>
      </div>
    </div>
    <div class="first-screen_left-background"></div>
    <div class="first-screen_right">
      <button class="first-screen_right-button button p">Ещё</button>
    </div>
  </section>
</template>

<style>
.first-screen {
  width: 100%;
  height: 100vh;
  background: url("../../assets/img/library_main_background.png") center;
  background-size: cover;
}

.first-screen_left {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  width: calc(50% + 8.125rem);
  height: 100vh;
  color: #FFFFFF;
}

.first-screen_hr {
  width: 11rem;
  height: 0.0625rem;
  margin: 0.5rem 0 1rem 0;
  background: #FFFFFF;
}

.first-screen_text {
  white-space: pre-line;
  max-width: 28rem;
  margin-bottom: 2rem;
}

.first-screen_left-button {
  width: 15rem;
  height: 2rem;
}

.first-screen_left-background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: calc(50% + 8.125rem);
  height: 100vh;
  background: rgba(33, 33, 33, 0.35);
  filter: blur(0.5rem);
  backdrop-filter: blur(0.625rem);
}

.first-screen_right-button {
  position: absolute;
  right: 6rem;
  bottom: 2.625rem;
  z-index: 2;
  width: 7.75rem;
  height: 2rem;
}
</style>