<template>
  <div>
    <h1 class="Header">
      {{ this.header }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  props: {
    header: String,
  },
};
</script>

<style>
.Header {
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 600;
}
</style>
