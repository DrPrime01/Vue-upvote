<template>
  <div class="product-container">
    <div
      class="product"
      v-for="seed in productData"
      :key="seed.id"
      :class="{ 'blue-border': seed.votes >= 20 }"
    >
      <div class="product-img">
        <img :src="seed.productImageUrl" alt="product" />
      </div>
      <div class="product-content">
        <div class="product-title">
          <span class="left-content">
            <span class="prod-title">{{ seed.title }}</span>
            <span class="product-rank">#{{ seed.number }}</span>
          </span>
          <span class="product-vote" @click="handleVote(seed.id)">
            <v-icon name="fa-angle-up" /> {{ seed.votes }}</span
          >
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
export default {
  name: "ProductContainer",
  props: ["productData"],
  methods: {
    handleVote(id) {
      this.productData.find((seed) => {
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

<style scoped>
.blue-border {
  border: 1px solid blue;
}
</style>
