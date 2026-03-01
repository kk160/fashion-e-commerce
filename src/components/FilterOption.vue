<template>
  <label class="filter-option-container">
    <input type="checkbox" />
    <span class="checkmark"></span>
    {{ category }} (<span class="available-products">{{ availableProducts }}</span
    >)
  </label>
</template>

<script setup>
defineProps({
  category: {
    type: String,
    required: true,
  },
  availableProducts: {
    type: Number,
    default: 0,
  },
})
</script>

<style scoped>
.filter-option-container {
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 12px;
}
.filter-option-container input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  margin-right: 8px;
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: solid 1px #a3a3a3;
}
.filter-option-container input:checked ~ .checkmark {
  background-color: #a3a3a3;
}
.filter-option-container:hover input ~ .checkmark {
  background-color: #a3a3a3;
}
.available-products {
  color: #000e8a;
  font-weight: bold;
}
</style>
