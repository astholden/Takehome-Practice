<template>
  <div class="Card" v-if="device === `Desktop`">
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
  <div class="CardMobile" v-else>
    <p class="Name">{{ this.beer.name }}</p>
    <p class="Tagline">{{ this.beer.tagline }}</p>
    <img
      class="ImageMobileSpecial"
      v-if="
        this.beer.image_url.includes('keg') ||
        this.beer.id === 24 ||
        this.beer.image_url.includes('cask')
      "
      :src="this.beer.image_url"
    />
    <img class="ImageMobile" v-else :src="this.beer.image_url" />
    <p class="Description">{{ this.beer.description }}</p>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    beer: Object,
    device: String,
  },
};
</script>

<style>
p {
  margin: 7px;
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
.CardMobile {
  margin-top: 30px;
  margin-bottom: 30px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    "Name"
    "Tagline"
    "ImageMobile"
    "Description";
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
.ImageMobile {
  float: none;
  width: 60px;
  position: relative;
  left: 40%;
  transform: rotate(90deg);
  margin-top: -75px;
  margin-bottom: -75px;
}
.ImageMobileSpecial {
  float: none;
  height: 200px;
  position: relative;
  left: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
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
