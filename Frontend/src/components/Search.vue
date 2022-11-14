<template>
  <div class="Search">
    <div v-if="device !== `Desktop`">
      <a>{{ this.title }}</a>
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="this.placeholder"
        class="InputFieldMobile"
      />
    </div>
    <div v-else>
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="this.placeholder"
        class="InputField"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BeerSearch",
  props: {
    modelValue: String,
    title: String,
    placeholder: String,
    device: String,
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
.InputFieldMobile {
  width: 90vw;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
}
</style>
