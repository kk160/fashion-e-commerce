<template>
  <main>
    <div>
      <Filter :product-list="productStore.products" :available-products="productList" />
    </div>
    <div>
      <p class="product-list-title">Products</p>
      <SearchBar @update-search-by-text="searchByText = $event" />
      <ProductList :product-list="productList" />
    </div>
  </main>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useProductStore } from '@/stores/product'
import Filter from '@/components/Filter.vue'
import ProductList from '@/components/ProductList.vue'
import SearchBar from '@/components/SearchBar.vue'

const productStore = useProductStore()
const searchByText = ref('')
const filterByCategory = ref([])
const filterByPriceMin = ref(0)
const filterByPriceMax = ref(10000)

onMounted(async () => {
  await productStore.loadProducts()
})

const productList = computed(() => {
  return productStore.products.filter(
    (product) =>
      !searchByText.value ||
      product.title.toLowerCase().includes(searchByText.value.toLowerCase()) ||
      product.category.toLowerCase().includes(searchByText.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchByText.value.toLowerCase()),
  )
})
</script>

<style scoped>
main {
  display: flex;
  padding: 0 50px;
}
.product-list-title {
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
}
</style>
