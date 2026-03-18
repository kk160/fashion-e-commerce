<template>
  <div class="product-list-container">
    <div v-for="product in productList" class="product-container" @click="goToProduct(product.id)">
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProductItem from './ProductItem.vue'

defineProps({
  productList: {
    type: Array,
    required: true,
  },
})

const router = useRouter()

const goToProduct = (productId) => {
  router.push({
    name: "productDetail",
    params: {id: productId}
  })
}
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
