<template>
  <div class="input">
    <div class="input_icon">
      <svg-icon :name="icon" />
    </div>
    <input :type="type" class="input_input p" :placeholder="input_placeholder"
           v-bind:value="value"
           v-on:input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: [
    'icon',
    'input_placeholder',
    'value',
    'type'
  ]
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 100%;
  background: #009688;
}

.input_icon svg{
  width: 1.25rem;
  height: 1.25rem;
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
