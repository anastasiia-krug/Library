<template>
  <div class="input">
    <div class="input_icon"></div>
    <input class="input_input">
  </div>
</template>

<style>
.input {
  display: flex;
  width: 19.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  overflow: hidden;
}

.input_icon {
  width: 3.125rem;
  height: 100%;
  background: #009688;
}

.input_input {
  flex-grow: 1;
  background: #FFFFFF;
}

.input_input::placeholder {
  color: #C5C5C5;
}
</style>