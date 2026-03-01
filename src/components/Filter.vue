<template>
  <p class="filter-title">Filters</p>
  <div class="filter-container">
    <p class="filter-name">Category</p>
    <div>
      <div v-for="category in categoryList">
        <FilterOption
          :category="category"
          :available-products="getNumberOfAvailableProducts(category)"
        />
      </div>
    </div>
  </div>
  <div class="filter-container">
    <p class="filter-name">Price Range</p>
    <div>
      <v-range-slider v-model="price" :min="0" :max="1000" :step="10" thumb-label />
    </div>
  </div>
  <div class="filter-container">
    <p class="filter-name">Rating</p>
    <div></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import FilterOption from './FilterOption.vue'
import { ref } from 'vue'

const price = ref([100, 500])

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
  return categoryArr
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
