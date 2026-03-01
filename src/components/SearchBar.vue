<template>
  <div class="searchfield">
    <img src="../assets/icons/search-icon.svg" alt="Search" />
    <input type="text" v-model="searchText" @input="changeSearchText" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['updateSearchByText'])

const searchText = ref('')

function changeSearchText() {
  emit('updateSearchByText', searchText.value)
  console.error('Qwe emit', searchText)
}
</script>

<style scoped>
input {
  background-color: transparent;
  border: none;
}
.searchfield {
  margin-bottom: 40px;
  padding: 15px;
  display: flex;
  align-items: center;
  max-width: 370px;
  background-color: #d9d9d9;
}
</style>
