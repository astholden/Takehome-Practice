<template>
  <div class="App">
    <TopHeader :header="`Punk API Beers`" />
    <Search
      v-model="beerName"
      :title="`Filter beer by name`"
      :placeholder="`example: Hazy Jane`"
      :browserPlaceholder="`Type here to filter by name`"
    />
    <div class="Beers">
      <div v-for="beer in filteredList" :key="beer.id">
        <Card :beer="beer" />
      </div>
    </div>
    <div class="ButtonLocation">
      <button
        class="Button"
        v-if="
          filteredList.length >= 20 &&
          beers.length > 20 &&
          filteredList.length !== beers.length
        "
        @click="loadMoreBeers"
      >
        Load More Beers
      </button>
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
      listLength: 20,
      device: "",
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
  methods: {
    loadMoreBeers() {
      if (this.listLength > this.filteredList.length) return;
      this.listLength += 20;
    },
    screenResize() {
      let size = window.innerWidth;
      console.log("size", size);
      if (size < 481) {
        this.device = "Phone";
      }
      if (size > 480 && size < 1025) {
        this.device = "Tablet";
      }
      if (size > 1024) {
        this.device = "Desktop";
      }
    },
  },
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
  mounted() {
    window.addEventListener("resize", this.screenResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.screenResize);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.Beers {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.Button {
  font-family: "Montserrat";
  font-size: 24px;
  font-weight: 800;
  height: 100px;
  width: 300px;
}
.ButtonLocation {
  display: flex;
  justify-content: center;
}
</style>