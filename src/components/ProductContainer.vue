<template>
  <div class="product-container">
    <div class="product" v-for="seed in seeds" :key="seed.id">
      <div class="product-img">
        <img :src="seed.productImageUrl" alt="product" />
      </div>
      <div class="product-content">
        <div class="product-title">
          <span class="left-content">
            <span class="prod-title">{{ seed.title }}</span>
            <span class="product-rank">#4</span>
          </span>
          <span class="product-vote" @click="handleVote(seed.id)">{{
            seed.votes
          }}</span>
        </div>
        <div class="product-desc">
          {{ seed.description }}
        </div>
        <div class="product-owner">
          Submitted by:
          <span class="product-owner-img">
            <img :src="seed.submitterAvatarUrl" alt="owner" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Products } from "../assets/Data/Seed";
export default {
  name: "ProductContainer",
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
  methods: {
    handleVote(id) {
      this.seeds.find((seed) => {
        if (seed.id == id) {
          seed.votes++;
        } else {
          return;
        }
      });
    },
  },
};
</script>
