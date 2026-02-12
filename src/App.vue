<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: 100%;
  align-items: center;
}
</style>
