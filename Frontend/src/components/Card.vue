<template>
  <div class="Card">
    <a class="Description">
      <p class="Name">{{ this.beer.name }}</p>
      <p class="Tagline">{{ this.beer.tagline }}</p>
      <p class="Description">{{ this.beer.description }}</p>
      <p class="Pairing">Pair it With</p>
      <a class="FoodPairing">
        <li v-for="(pairing, index) in this.beer.food_pairing" :key="index">
          {{ pairing }}
        </li>
      </a>
      <p class="AbvIbuPh">
        ABV: {{ this.beer.abv }} | IBU: {{ this.beer.ibu }} | PH:
        {{ this.beer.ph }}
      </p>
    </a>
    <img class="Image" :src="this.beer.image_url" />
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
p {
  margin: 10px;
}
.Card {
  margin-top: 40px;
  margin-bottom: 40px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "Image Description";
}
.Description {
  grid-area: Description;
}
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
  grid-area: Image;
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
