<template>
  <div>
    <p class="Name">{{ this.beer.name }}</p>
    <p class="Tagline">{{ this.beer.tagline }}</p>
    <p class="Description">{{ this.beer.description }}</p>
    <img class="Image" :src="this.beer.image_url" />
    <p class="Pairing">Pair it With</p>
    <a class="FoodPairing">
      <li v-for="(pairing, index) in this.beer.food_pairing" :key="index">
        {{ pairing }}
      </li>
    </a>
    <p class="AbvIbuPh">
      ABV: {{ this.beer.abv }} | IBU: {{ this.beer.ibu }} | PH: {{ this.beer.ph }}
    </p>
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

<style>
.Name {
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: bold;
}
.Tagline {
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
}
.Description {
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
}
.Image {
  height: 400px;
}
.Pairing {
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
}
.FoodPairing {
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
}
.AbvIbuPh {
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
}
</style>
