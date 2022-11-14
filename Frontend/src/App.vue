<template>
  <div class="App">
    <TopHeader :header="`Punk API Beers`" />
    <Search
      v-model="beerName"
      :title="`Filter beer by name`"
      :placeholder="`example: Hazy Jane`"
      :browserPlaceholder="`Type here to filter by name`"
    />
    <div v-for="beer in filteredList" :key="beer.id">
      <Card :beer="beer" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import TopHeader from "@/components/TopHeader.vue";
import Search from "@/components/Search.vue";
export default {
  name: "App",
  components: {
    Card,
    TopHeader,
    Search,
  },
  data() {
    return {
      beers: [],
      modifiedList: [],
      beerName: "",
      listLenght: 20,
    };
  },
  computed: {
    filteredList() {
      return this.modifiedList
        .filter((beer) => {
          return beer.name
            .toLocaleLowerCase()
            .includes(this.beerName.toLocaleLowerCase());
        })
        .slice(0, this.listLength);
    },
  },
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
