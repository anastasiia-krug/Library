<template>
  <div class="input">
    <div class="input_icon">
      <svg-icon :name="icon" />
    </div>
    <input class="input_input p">
  </div>
</template>

<script>
export default {
  props: {
    icon: ''
  }
}
</script>

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

.input_icon svg{
  width: 3.125rem;
  height: 3rem;
}

.input_input {
  flex-grow: 1;
  padding-left: 0.75rem;
  background: #FFFFFF;
}

.input_input:focus {
  outline: none;
}

.input_input::placeholder {
  color: #C5C5C5;
  text-align: left;
}
</style>