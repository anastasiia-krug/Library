<template>
  <div class="search">
    <input class="search_input" placeholder="Поиск">
    <button class="search_button">
      <img src="../../assets/svg/search.svg" alt="search" height="17px" width="17px">
    </button>
  </div>
</template>

<style>
.search {
  display: flex;
  align-items: center;
  height: 1.1875rem;
}

.search_input {
  height: 1.1875rem;
  margin-right: 1rem;
  color: #FFFFFF;
  background: none;
  outline: none;
  border: none;
}

::placeholder {
  color: #EEEEEE;
  text-align: right;
}

.search_button {
  width: 1.0625rem;
  height: 1.0625rem;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>