<template>
  <div class="product-list-container">
    <div v-for="product in productList" class="product-container">
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'

defineProps({
  productList: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.product-list-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.product-container {
  width: 266px;
}
</style>
