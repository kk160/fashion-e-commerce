<template>
  <div class="product-item">
    <div class="product-image-container product-image-frame">
      <img :src="product.image" alt="product.title" />
    </div>
    <div class="product-category-container">
      <p>{{ product.category }}</p>
    </div>
    <div class="product-information-container">
      <p class="product-title">{{ product.title }}</p>
      <p>$ {{ product.price }}</p>
    </div>
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
.product-item {
  margin-right: 10px;
  cursor: pointer;
}
</style>
