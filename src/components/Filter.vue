<template>
  <p class="filter-title">Filter</p>
  <div class="filter-container">
    <p class="filter-name">Category</p>
    <div>
      <div v-for="category in categoryList">
        <FilterOption
          :category="category.name"
          :available-products="getNumberOfAvailableProducts(category)"
        />
      </div>
    </div>
  </div>
  <div class="filter-container">
    <p class="filter-name">Price Range</p>
    <div></div>
  </div>
  <div class="filter-container">
    <p class="filter-name">Rating</p>
    <div></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import FilterOption from './filterOption.vue'

const props = defineProps({
  productList: {
    type: Object,
    required: true,
  },
  availableProducts: {
    type: Object,
    required: true,
  },
})

const categoryList = computed(() => {
  const categoryArr = [...new Set(props.productList.map((product) => product.category))]
  return categoryArr.map((category) => {
    return { name: category, checked: false }
  })
})

function getNumberOfAvailableProducts(category) {
  return props.availableProducts.filter((product) => category == product.category).length
}
</script>

<style scoped>
.filter-container {
  padding: 25px 0 30px 0;
  width: 266px;
  border-bottom: dashed 1px #c9c9c9;
}
.filter-title {
  font-size: 16px;
  font-weight: bold;
}
.filter-name {
  margin-bottom: 20px;
  font-weight: bold;
}
</style>
