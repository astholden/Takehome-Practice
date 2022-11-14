<template>
  <div class="App">
    <h1 class="Header">Punk API Beers</h1>
    <p>Filter beer by name</p>
    <input type="text" v-model="beerName" placeholder="example: Hazy Jane" />
    <div v-for="beer in modifiedList" :key="beer.id">
      <Card :beer="beer" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      beers: [],
      modifiedList: [],
      beerName: "",
      listLenght: 20,
    };
  },
  computed: {},
  methods: {},
  async created() {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    this.beers = data;
    data.forEach((beer) => {
      let beerObj = {
        id: beer.id,
        name: beer.name,
        tagline: beer.tagline,
        description: beer.description,
        image_url: beer.image_url,
        food_pairing: beer.food_pairing,
        abv: beer.abv,
        ibu: beer.ibu,
        ph: beer.ph,
      };
      this.modifiedList.push(beerObj);
    });
  },
  mounted() {},
  unmounted() {},
};
</script>
