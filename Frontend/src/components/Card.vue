<template>
  <div>
    <p>{{ this.beer.name }}</p>
    <p>{{ this.beer.tagline }}</p>
    <p>{{ this.beer.description }}</p>
    <img :src="this.beer.image_url" />
    <p>{{ this.beer.food_pairing }}</p>
    <p>{{ this.beer.abv }} | {{ this.beer.ibu }} | {{ this.beer.ph }}</p>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    beer: Object,
  },
};
</script>
