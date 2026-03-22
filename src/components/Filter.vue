<template>
  <div class="filter">
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
      <div class="slider-container">
        <VueSlider 
          v-model="priceRange" 
          :min="0" 
          :max="1000" 
          :enable-cross="false"
          :height="6"
          :process-style="{ backgroundColor: '#000' }"
          :rail-style="{ backgroundColor: '#d9d9d9' }"
          :dot-style="{ backgroundColor: '#f1f2f7', border: '2px solid #d9d9d9' }"
        />
      </div>
    </div>
    <div class="filter-container">
      <p class="filter-name">Rating</p>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, watchEffect } from 'vue'
import FilterOption from './FilterOption.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

const props = defineProps({
  productList: {
    type: Array,
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

const prices = props.productList.map(p => p.price)

const min = prices.length ? Math.min(...prices) : 0
const max = prices.length ? Math.max(...prices) : 0

const minPrice = ref(min)
const maxPrice = ref(max)
const priceRange = ref([0, 1000])

watch(
  () => props.productList,
  (list) => {
    if (list.length) {
      const prices = list.map(p => p.price)
      minPrice.value = Math.min(...prices)
      maxPrice.value = Math.max(...prices)
      priceRange.value = [minPrice.value, maxPrice.value]
    }
  },
  { immediate: true }
)

function getNumberOfAvailableProducts(category) {
  return props.availableProducts.filter((product) => category == product.category).length
}
</script>

<style scoped>
.filter {
  margin-right: 20px;
}
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
.slider-container {
  padding-top: 30px;
}
:deep(.vue-slider-dot-handle) {
  box-shadow: none;
}
:deep(.vue-slider-dot-handle-focus) {
  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
}
:deep(.vue-slider-dot-tooltip-inner) {
  border-color: #000;
  background-color: #000;
  visibility: visible;
}
</style>
