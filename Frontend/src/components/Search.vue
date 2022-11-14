<template>
  <div class="Search">
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

<style>
.Search {
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
}
.InputField {
  width: 50vw;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
}
</style>
