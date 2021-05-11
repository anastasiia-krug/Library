<template>
  <section class="authors">
    <div class="wrapper authors_container">
      <div class="authors_header">
        <button class="authors_header-button button p">Ещё</button>
        <h2 class="authors_h2 h2">Авторы</h2>
      </div>
      <div class="authors_main">
        <div class="author-card">
          <div class="author-card_img-container">
            <img class="author-card_img" src="../../assets/img/joanne_rowling.png" alt="Joanne Rowling">
          </div>
          <h3 class="author-card_h3 h3">Джоан Роулинг</h3>
        </div>
        <div class="author-card">
          <div class="author-card_img-container">
            <img class="author-card_img" src="../../assets/img/joanne_rowling.png" alt="Joanne Rowling">
          </div>
          <h3 class="author-card_h3 h3">Джоан Роулинг</h3>
        </div>
        <div class="author-card">
          <div class="author-card_img-container">
            <img class="author-card_img" src="../../assets/img/joanne_rowling.png" alt="Joanne Rowling">
          </div>
          <h3 class="author-card_h3 h3">Джоан Роулинг</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.authors {
  width: 100%;
  height: 32rem;
  background: #226055;
}

.authors_container {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.authors_header {
  display: flex;
  width: 100%;
  height: 2rem;
  margin-top: 3rem;
}

.authors_header-button {
  width: 7.75rem;
  height: 2rem;
  margin-right: 2.5rem;
}

.authors_h2 {
  color: #FFFFFF;
}

.authors_main {
  display: flex;
  width: 100%;
  height: 20rem;
  margin-top: 3rem;
}

.author-card {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 9rem;
  margin: 1.5rem 3rem 0 2rem;
}

.author-card_img-container {
  width: 9rem;
  height: 9rem;
}

.author-card_img {
  width: 100%;
}

.author-card_h3 {
  position: relative;
  width: 100%;
  margin-top: 1rem;
  color: #FFFFFF;
  text-align: center;
}
</style>