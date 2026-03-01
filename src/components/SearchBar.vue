<template>
  <div>
    <img src="" alt="" />
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
