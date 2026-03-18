<template>
  <div class="product-image-container">
    <img :src="product.image" alt="product.title" />
  </div>
  <div class="product-category-container">
    <p>{{ product.category }}</p>
  </div>
  <div class="product-information-container">
    <p class="product-title">{{ product.title }}</p>
    <p>$ {{ product.price }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.product-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  height: 314px;
  border: solid #d9d9d9;
  background-color: #f1f2f7;
}
.product-image-container img {
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
.product-category-container {
  font-size: 12px;
}
.product-information-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}
.product-title {
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
