<template>
  <div class="container">
    <h2 class="title">UpVote!</h2>
    <ProductContainer :productData="seeds" />
  </div>
</template>

<script>
import ProductContainer from "./components/ProductContainer.vue";
import { Products } from "../src/assets/Data/Seed";
export default {
  data() {
    return {
      seeds: [],
    };
  },
  mounted() {
    this.seeds = Products;
  },
  computed: {
    sortedSeeds() {
      return this.seeds.slice(0).sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  watch: {
    sortedSeeds(newValue) {
      this.seeds.splice(0, this.seeds.length, ...newValue);
    },
  },
  components: { ProductContainer },
};
</script>
