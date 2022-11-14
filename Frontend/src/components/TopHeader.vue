<template>
  <div class="Header">
    {{ this.header }}
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
