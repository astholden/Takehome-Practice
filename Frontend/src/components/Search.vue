<template>
  <div>
    <p>{{ this.title }}</p>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="this.placeholder"
      class="InputField"
    />
  </div>
</template>

<script>
export default {
  name: "BeerSearch",
  props: {
    modelValue: String,
    title: String,
    placeholder: String,
  },
};
</script>
